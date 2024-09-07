using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SpeedyNote.Back.Models;

var builder = WebApplication.CreateBuilder(args);

// Configura el DbContext para usar PostgreSQL
builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configura servicios para los controladores
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configura el pipeline de solicitud HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
