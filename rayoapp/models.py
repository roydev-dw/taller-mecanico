from django.db import models

# Create your models here.


class Mecanico(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, verbose_name='Nombre', null=True)
    descripcion = models.TextField(verbose_name="Descripción", null=True)
    imagen = models.ImageField(upload_to='img/', verbose_name="Imagen", null=True)

    # MUESTRA NOMBRE DEL MECANICO EN LA FILA - APARTADO DEL ADMIN 
    def __str__(self):
        fila = self.nombre
        return fila
    

    # INSTRUCCION PARA BORRAR LA IMAGEN DEL MECANICO, LA ELIMINA DEL SOTRAGE
    def delete(self, using=None, keep_parents=False):
        self.imagen.storage.delete(self.imagen.name)
        super().delete()

class Detalle_mecanico(models.Model):
    id = models.AutoField(primary_key=True)
    nombre_encabezado = models.CharField(max_length=100, verbose_name='Nombre_Encabezado', null=True)
    expertiz_encabezado = models.CharField(max_length=100, verbose_name='Expertiz_Encabezado', null=True)
    imagen = models.ImageField(upload_to='img/', verbose_name="Imagen", null=True)
    nombre = models.CharField(max_length=100, verbose_name='Nombre', null=True)
    especialidad = models.CharField(max_length=100, verbose_name='Especialidad', null=True)
    titulos = models.CharField(max_length=100, verbose_name='Titulos', null=True)
    agnos_exp = models.CharField(max_length=100, verbose_name='Años_Experiencia', null=True)
    resumen_pro = models.TextField(max_length=1000, verbose_name='Resumen_Pro', null=True)
    resumen_edu = models.TextField(max_length=1000, verbose_name='Resumen_Edu', null=True)
    resumen_exp = models.TextField(max_length=1000, verbose_name='Resumen_Exp', null=True)
    trabajo_uno = models.CharField(max_length=100, verbose_name='Trabajo_Uno', null=True)
    desc_tra_uno = models.TextField(max_length=1000, verbose_name='Descripción_tra_uno', null=True)
    trabajo_dos = models.CharField(max_length=100, verbose_name='Trabajo_Dos', null=True)
    desc_tra_dos = models.TextField(max_length=1000, verbose_name='Descripción_tra_dos', null=True)
    trabajo_tres = models.CharField(max_length=100, verbose_name='Trabajo_Tres', null=True)
    desc_tra_tres = models.TextField(max_length=1000, verbose_name='Descripción_tra_tres', null=True)

    # MUESTRA NOMBRE DEL MECANICO EN LA FILA - APARTADO DEL ADMIN 
    def __str__(self):
        fila = self.nombre_encabezado + self.expertiz_encabezado
        return fila
    
    # INSTRUCCION PARA BORRAR LA IMAGEN DEL MECANICO, LA ELIMINA DEL SOTRAGE
    def delete(self, using=None, keep_parents=False):
        self.imagen.storage.delete(self.imagen.name)
        super().delete()