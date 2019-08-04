using CoffeeBillboard.DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CoffeeBillboard.DataAccess
{
    public interface ICoffeeRepository
    {
        Task<List<Coffee>> GetCoffees();
        Task<Coffee> Insert(Coffee coffee);
        Task Delete(int id);
    }
}
