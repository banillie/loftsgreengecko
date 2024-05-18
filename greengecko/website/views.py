from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = "home.html"


class KitchenView(TemplateView):
    template_name = "kitchens.html"


class TestimonialView(TemplateView):
    template_name = "testimonials.html"
