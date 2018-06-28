from django.conf.urls import url

from . import views

app_name = 'brands'
urlpatterns = [
    url(r'^log/', views.ChangeLogView.as_view()),

]
