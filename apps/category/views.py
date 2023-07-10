from rest_framework.views import APIView   #vistas en djangorest
from rest_framework.response import Response #respuesta en funcion
from rest_framework import status  
from rest_framework import permissions #quien pued acceder
from .models import Category    #impoortando el modelo


class ListCategoriesView(APIView):
    permission_classes = (permissions.AllowAny,)   # qye permiso tienen las personas es una tupla se termina con una coma 

    def get(self, request, format=None): 
        if Category.objects.all().exists():   #el objeto existe? si uno existe sigue sino no se encontro categoria
            categories = Category.objects.all() #todas las categorias

            result = [] #definimos lista vacia

            for category in categories:
                if not category.parent:
                    item = {}
                    item['id']=category.id
                    item['name']=category.name
                    item['slug']=category.slug
                    item['views']=category.views
                
                    item['sub_categories'] = []
                    for sub_category in categories:
                        sub_item = {}
                        if sub_category.parent and sub_category.parent.id == category.id:
                            sub_item['id']=sub_category.id
                            sub_item['name']=sub_category.name
                            sub_item['slug']=sub_category.slug
                            sub_item['views']=sub_category.views

                            item['sub_categories'].append(sub_item)
                    
                    result.append(item)

            return Response({'categories': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No categories found'}, status=status.HTTP_404_NOT_FOUND)