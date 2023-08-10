from django.contrib import admin
from django.urls import path, re_path,include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
import environ
env = environ.Env()
ADMIN_URL_PATH = env('ADMIN_URL_PATH', default='admin/')

urlpatterns = [
    path('api/blog/', include('apps.blog.urls')),
    path('api/category/', include('apps.category.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('api/contact/', include('apps.contact.urls')),
    path(ADMIN_URL_PATH, admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]