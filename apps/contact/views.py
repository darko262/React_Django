from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from django.core.mail import send_mail, EmailMessage
from .models import Contact
from django.conf import settings
from rest_framework.permissions import AllowAny

class ContactCreateView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
       
        # email2 = EmailMessage(
        #     "envio el siguiente email"
        #     "De {} {} \n\n {} {} {} ".format(name,email,subject,message,phone),
        #     "padillaseba06@gmail.com",
        #     ["seba.padilla@live.cl"]
        #     )
        data=request.data
       
        try:
            
            name = data['name']
            email = data['email']
            subject = data['subject']
            message = data['message']
            phone = data['phone']
            # email2.fail_silently=False
            # email2.send()
            # email_subject = "envio el siguiente email"
            # email_body = "De {} {} \n\n {} {} {} ".format(name,email,subject,message,phone)
            # from_email = 'padillaseba06@gmail.com'
            # to_email_list = 'seba.padilla@live.cl'

            # email = EmailMessage(email_subject, email_body, from_email, to=[to_email_list])
            # email.send()
            send_mail(
                subject, 
                'New Client Request:\n\nName: ' + name 
                + '\nEmail: ' + email
                + '\n\nMessage:\n' + message
                + '\nPhone: ' + phone,
                settings.EMAIL_HOST_USER,
                ['seba.padilla@live.cl','s.padilla01@ufromail.cl'],
                fail_silently=False
            )

            # Contact.objects.create(
            #     name=name,
            #     email=email,
            #     phone=phone,
            #     subject=subject,
            #     message=message,
            # )
            return Response({'status': 'success', 'message': 'Message sent successfully','data':data})
        except:
            return Response({'status': 'error', 'message': 'Message not sent','data':data})

            
          



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