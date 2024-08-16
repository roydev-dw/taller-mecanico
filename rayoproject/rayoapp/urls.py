from django.urls import path, re_path
from rayoapp import views
from django.contrib.auth.views import LoginView
from django.conf import settings
from django.contrib.staticfiles.urls import static

urlpatterns = [

    path('', views.inicio, name='inicio'),
    path('mecanico', views.mecanico, name='mecanico'),
    path('mecanicos/crear', views.crearmec, name='crear'),
    path('mecanicos/editar/<int:id>', views.editarmec, name='editar'),
    path('eliminar/<int:id>', views.eliminarmec, name='eliminar'),
    path('detalle_mecanico/', views.detalle_mecanico, name='detalle_mecanico'),
    path('mecanicos/creardetalle/', views.creardetalle, name='creardetalle'),
    path('mecanicos/editardet/<int:id>', views.editardet, name='editardet'),
    path('eliminardet/<int:id>', views.eliminardet, name='eliminardet'),
    path('servicios/', views.servicios, name='servicios'),
    path('contacto/', views.contacto, name='contacto'),
    re_path(r'^accounts/login/.*$', LoginView.as_view(), name='login'),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
