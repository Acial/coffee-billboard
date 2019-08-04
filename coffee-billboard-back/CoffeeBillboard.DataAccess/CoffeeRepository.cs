using System.Collections.Generic;
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
    }
}
