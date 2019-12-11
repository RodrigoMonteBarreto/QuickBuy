using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Config
{
    public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(u => u.Id);


            // Buider utiliza o padrão Fluent
            // Exemplo abaixo:


            builder
                .Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(50);

            builder
                .Property(u => u.Senha)
                .IsRequired()
                .HasMaxLength(400);

            builder
                .Property(u => u.Nome)
                .IsRequired()
                .HasMaxLength(50)
                .HasColumnType("nvarchar(50)");

            builder
                .Property(u => u.Sobrenome)
                .IsRequired()
                .HasMaxLength(50);

      

            // O HasMany dá a possiblidade de acessar as propriedades de pedido
            // Um usuario u pode ter muitos pedidos (HasMany) e um Pedido p só pode ter um usuario

            builder
                .HasMany(u => u.Pedidos)
                .WithOne(p => p.Usuario);


            //builder.Property(u => u.Pedidos);
        }
    }
}
