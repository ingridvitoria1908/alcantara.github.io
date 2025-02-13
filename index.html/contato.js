document.addEventListener('DOMContentLoaded'), function() {
    
    const form = document.getElementById('contactForm');
}

    
    form.addEventListener('submit'), function(event) {
        
        event.preventDefault();
    }

       
        const nameInput = form.name.value.trim();
        if (nameInput === "") {
            alert('Por favor, insira seu nome.');
            return; 
        }

        
        const emailInput = form.email.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput)) {
            alert('Por favor, insira um e-mail válido.');
            return; 
        }

        
        const whatsappInput = form.whatsapp.value.trim();
        const whatsappPattern = /^[0-9]+$/;
        if (!whatsappPattern.test(whatsappInput)) {
            alert('Por favor, insira um número de WhatsApp válido (apenas números).');
            return; 
        }

       
        const messageInput = form.message.value.trim();
        if (messageInput === "") {
            alert('Por favor, insira uma mensagem.');
            return; 
        }

        
