from datetime import datetime
from django.contrib.sitemaps import Sitemap
from django.urls import reverse


class StaticSitemap(Sitemap):
    changefreq = 'weekly'  # Set the frequency of updates
    priority = 0.9  # Set the priority of the page
    lastmod = datetime(2024, 1, 10)

    def items(self):
        return ['home', 'testimonial']  # URL patterns or names

    def location(self, item):
        return reverse(item)
