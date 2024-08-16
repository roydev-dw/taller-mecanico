from django.contrib import admin
from django.urls import path
from django.urls import include
from django.config import settings
from django.config.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('rayoapp.urls')),
    path('accounts/', include("django.contrib.auth.urls")),
] +static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
