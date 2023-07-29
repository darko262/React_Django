from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt , csrf_protect
import requests
import os
from .models import Contact
from django.core.mail import send_mail, EmailMessage
from serializers import *


from django.conf import settings
# activecampaign_url = settings.ACTIVE_CAMPAIGN_URL
# activecampaign_key = settings.ACTIVE_CAMPAIGN_KEY



class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny,)
    @csrf_protect
    def post(self, request):
            serializers = ContactSerializer(data=request.data)
            if serializers.is_valid(raise_exception=True):
                   serializers.save()
    # def post(self, request, format=None):
    #     data = self.request.data

    #     name = data.POST.get('name','')
    #     email = data.POST.get('email','')
    #     subject = data.POST.get('subject','')
    #     message = data.POST.get('message','')
    #     phone = data.POST.get('phone','')
    #     # email = data['email']
    #     # subject = data['subject']
    #     # message = data['message']
    #     # phone = data['phone']
        
    #     email = EmailMessage(
    #         "envio el siguiente email"
    #         "De {} {} \n\n {} {} {} ".format(name,email,subject,message,phone),
    #         "padillaseba06@gmail.com",
    #         ["seba.padilla@live.cl"],
    #         reply_to=[email]

    #     )
    #     try:
    #         email.send()
    #         # send_mail(
    #         #     subject, 
    #         #     'New Client Request: '
    #         #     + '\n\nName: ' + name 
    #         #     + '\nEmail: ' + email
    #         #     + '\n\nMessage:\n' + message
    #         #     + '\nPhone: ' + phone,
    #         #     'padillaseba06@gmail.com',
    #         #     ['seba.padilla@live.cl'],
    #         #     fail_silently=False
    #         # )

    #         Contact.objects.create(
    #             name=name,
    #             email=email,
    #             phone=phone,
    #             subject=subject,
    #             message=message,
                
    #         )
            
            return Response(serializers.data)



# email_host_user = os.environ.get('EMAIL_HOST_USER')
            # email_host_password = os.environ.get('EMAIL_HOST_PASSWORD')
            # send_mail(
            #     subject = '¡Hola desde Django!',
            #     message = 'Este es un correo de prueba enviado desde Django.',
            #     from_email=email_host_user, 
            #     recipient_list=['seba.padilla@live.cl'],
            #     fail_silently=False,
            #     auth_user=email_host_user,  # Utiliza la variable de entorno para el correo de autenticación
            #     auth_password=email_host_password

            # )