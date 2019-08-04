using Microsoft.EntityFrameworkCore.Migrations;

namespace CoffeeBillboard.DataAccess.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Coffees",
                columns: new[] { "Id", "ImageUrl", "Price", "Title" },
                values: new object[] { 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XVhqR71ON8Aky8YazLE9TqApKaawKzw-GLn2udgLuRbfxoCSFw", 25.34m, "Great coffee" });

            migrationBuilder.InsertData(
                table: "Coffees",
                columns: new[] { "Id", "ImageUrl", "Price", "Title" },
                values: new object[] { 2, "https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg", 11.87m, "OK coffee" });

            migrationBuilder.InsertData(
                table: "Coffees",
                columns: new[] { "Id", "ImageUrl", "Price", "Title" },
                values: new object[] { 3, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvlvuDTx5uXTByWriTSObNuJN4JJfTW61KzYEf-ZvKhpbMhL3", 7.11m, "Subpar coffee" });

            migrationBuilder.InsertData(
                table: "Coffees",
                columns: new[] { "Id", "ImageUrl", "Price", "Title" },
                values: new object[] { 4, "https://cdn.shopify.com/s/files/1/2243/9531/products/Coffee_Beans.jpg?v=1518057952", 78.34m, "Amazing coffee" });

            migrationBuilder.InsertData(
                table: "Coffees",
                columns: new[] { "Id", "ImageUrl", "Price", "Title" },
                values: new object[] { 5, "http://plantinfo.co.za/admin/ckeditor/kcfinder/upload/images/spent%20coffy%20grounds.jpg", 3.44m, "Second hand coffee" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Coffees",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Coffees",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Coffees",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Coffees",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Coffees",
                keyColumn: "Id",
                keyValue: 5);
        }
    }
}
