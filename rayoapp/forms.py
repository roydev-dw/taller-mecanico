from django import forms
from .models import Mecanico, Detalle_mecanico

class MecanicoForm(forms.ModelForm):
    class Meta:
        model = Mecanico
        fields = '__all__'
        

class DetalleMecanicoForm(forms.ModelForm):
    class Meta:
        model = Detalle_mecanico
        fields = '__all__'