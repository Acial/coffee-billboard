using CoffeeBillboard.DataAccess;
using CoffeeBillboard.DataAccess.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoffeeBillboard.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAnythingPolicy")]
    public class CoffeeController
    {
        private readonly ICoffeeRepository _coffeeRepository;

        public CoffeeController(ICoffeeRepository coffeeRepository)
        {
            _coffeeRepository = coffeeRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Coffee>>> Get()
        {
            return await _coffeeRepository.GetCoffees();
        }

        [HttpPost]
        public async Task<ActionResult<Coffee>> Post([FromBody] Coffee coffee)
        {
            return await _coffeeRepository.Insert(coffee);
        }
    }
}
