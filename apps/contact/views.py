from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from django.core.mail import send_mail, EmailMessage
from .models import Contact
from django.conf import settings

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        name = request.data.get('name')
        email = request.data.get('email')
        subject = request.data.get('subject')
        message = request.data.get('message')
        phone = request.data.get('phone')
        email2 = EmailMessage(
            "envio el siguiente email"
            "De {} {} \n\n {} {} {} ".format(name,email,subject,message,phone),
            "padillaseba06@gmail.com",
            ["seba.padilla@live.cl"]
            )
       
        try:
            email2.fail_silently=False
            email2.send()
            # send_mail(
            #     subject, 
            #     'New Client Request:\n\nName: ' + name 
            #     + '\nEmail: ' + email
            #     + '\n\nMessage:\n' + message
            #     + '\nPhone: ' + phone,
            #     'padillaseba06@gmail.com',
            #     ['seba.padilla@live.cl','s.padilla01@ufromail.cl'],
            #     fail_silently=False
            # )

            Contact.objects.create(
                name=name,
                email=email,
                phone=phone,
                subject=subject,
                message=message,
            )
            return Response({'status': 'success', 'message': 'Message sent successfully'})
        except:
            return Response({'status': 'error', 'message': 'Message not sent'})

            
          



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
# def post(self, request, format=None):
    # #     serializers = ContactSerializer(data=request.data)
    # #     if serializers.is_valid(raise_exception=True):
    # #            serializers.save()
    # #     return Response(serializers.data)

             # email = EmailMessage(
        #     "envio el siguiente email"
        #     "De {} {} \n\n {} {} {} ".format(name,email,subject,message,phone),
        #     "padillaseba06@gmail.com",
        #     ["seba.padilla@live.cl"],
        #     reply_to=[email]

        # ) # email = data.POST.get('email','')
        # subject = data.POST.get('subject','')
        # message = data.POST.get('message','')
        # phone = data.POST.get('phone','')