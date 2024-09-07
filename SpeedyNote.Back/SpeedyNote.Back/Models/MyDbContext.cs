using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace SpeedyNote.Back.Models
{
    public partial class MyDbContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TbNote> TbNotes { get; set; }
        public virtual DbSet<TbUser> TbUsers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var connectionString = _configuration.GetConnectionString("DefaultConnection");
                optionsBuilder.UseNpgsql(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TbNote>(entity =>
            {
                entity.HasKey(e => e.IdNote).HasName("TB_NOTE_pkey");

                entity.ToTable("TB_NOTE");

                entity.Property(e => e.IdNote).HasColumnName("id_note");
                entity.Property(e => e.FkIdUser).HasColumnName("fk_id_user");
                entity.Property(e => e.NoteContent)
                    .HasMaxLength(250)
                    .HasColumnName("note_content");
                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .HasColumnName("title");

                entity.HasOne(d => d.FkIdUserNavigation).WithMany(p => p.TbNotes)
                    .HasForeignKey(d => d.FkIdUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("TB_NOTE_fk_id_user_fkey");
            });

            modelBuilder.Entity<TbUser>(entity =>
            {
                entity.HasKey(e => e.IdUser).HasName("TB_USER_pkey");

                entity.ToTable("TB_USER");

                entity.Property(e => e.IdUser).HasColumnName("id_user");
                entity.Property(e => e.Email)
                    .HasColumnType("character varying")
                    .HasColumnName("email");
                entity.Property(e => e.Password)
                    .HasColumnType("character varying")
                    .HasColumnName("password");
                entity.Property(e => e.UserImg).HasColumnName("user_img");
                entity.Property(e => e.UserLastName)
                    .HasColumnType("character varying")
                    .HasColumnName("user_last_name");
                entity.Property(e => e.UserName)
                    .HasColumnType("character varying")
                    .HasColumnName("user_name");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
