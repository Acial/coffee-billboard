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

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Coffee>().HasData(
            new Coffee
            {
                Id = 1,
                Title = "Great coffee",
                ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XVhqR71ON8Aky8YazLE9TqApKaawKzw-GLn2udgLuRbfxoCSFw",
                Price = 25.34M
            }, new Coffee
            {
                Id = 2,
                Title = "OK coffee",
                ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg",
                Price = 11.87M
            }, new Coffee
            {
                Id = 3,
                Title = "Subpar coffee",
                ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvlvuDTx5uXTByWriTSObNuJN4JJfTW61KzYEf-ZvKhpbMhL3",
                Price = 7.11M
            }, new Coffee
            {
                Id = 4,
                Title = "Amazing coffee",
                ImageUrl = "https://cdn.shopify.com/s/files/1/2243/9531/products/Coffee_Beans.jpg?v=1518057952",
                Price = 78.34M
            }, new Coffee
            {
                Id = 5,
                Title = "Second hand coffee",
                ImageUrl = "http://plantinfo.co.za/admin/ckeditor/kcfinder/upload/images/spent%20coffy%20grounds.jpg",
                Price = 3.44M
            }
            );
        }
    }
}
