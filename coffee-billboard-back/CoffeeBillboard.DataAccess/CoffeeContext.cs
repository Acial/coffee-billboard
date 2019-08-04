using CoffeeBillboard.DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace CoffeeBillboard.DataAccess
{
    public class CoffeeContext : DbContext
    {
        public CoffeeContext(DbContextOptions<CoffeeContext> options) : base(options) { }
        public DbSet<Coffee> Coffees { get; set; }
    }
}
