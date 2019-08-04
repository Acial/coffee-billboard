using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoffeeBillboard.DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace CoffeeBillboard.DataAccess
{
    public class CoffeeRepository : ICoffeeRepository
    {
        private readonly CoffeeContext _context;

        public CoffeeRepository(CoffeeContext context)
        {
            _context = context;
        }

        public async Task<Coffee> Insert(Coffee coffee)
        {
            var result = _context.Coffees.Add(coffee);
            await _context.SaveChangesAsync();
            return result.Entity;
        }

        public async Task<List<Coffee>> GetCoffees()
        {
            return await _context.Coffees.ToListAsync();
        }

        public async Task Delete(int id)
        {
            var coffee = _context.Coffees.First(e => e.Id == id);
            _context.Coffees.Remove(coffee);
            await _context.SaveChangesAsync();
        }
    }
}
