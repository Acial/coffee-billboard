using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Text;

namespace CoffeeBillboard.DataAccess
{
    class CoffeeContextFactory : IDesignTimeDbContextFactory<CoffeeContext>
    {
        public CoffeeContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<CoffeeContext>();
            optionsBuilder.UseSqlite("Data Source=../coffees.db");

            return new CoffeeContext(optionsBuilder.Options);
        }
    }
}
