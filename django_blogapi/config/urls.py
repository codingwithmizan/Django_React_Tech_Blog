from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
# from django.views.generic import TemplateView
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/blog/', include('blog.urls')),
    path('api/', include('blog2.urls')),
    path('user/', include('user.urls'))
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# urlpatterns += [re_path(r'^.*',TemplateView.as_view(template_name = 'index.html') )]