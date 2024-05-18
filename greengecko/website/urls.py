from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap
from .sitemaps import StaticSitemap

from .views import HomeView, TestimonialView

urlpatterns = [
    path("home", HomeView.as_view(), name="home"),
    path("testimonials", TestimonialView.as_view(), name="testimonial"),
    path('sitemap.xml', sitemap, {'sitemaps': {'static': StaticSitemap}}),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)