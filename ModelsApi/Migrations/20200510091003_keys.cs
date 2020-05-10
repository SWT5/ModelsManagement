using Microsoft.EntityFrameworkCore.Migrations;

namespace ModelsApi.Migrations
{
    public partial class keys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Model",
                columns: table => new
                {
                    Email = table.Column<string>(maxLength: 254, nullable: false),
                    FirstName = table.Column<string>(maxLength: 64, nullable: true),
                    LastName = table.Column<string>(maxLength: 32, nullable: true),
                    PhoneNo = table.Column<string>(maxLength: 12, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Model", x => x.Email);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Model");
        }
    }
}
