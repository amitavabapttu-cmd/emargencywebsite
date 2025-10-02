document.getElementById('infoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const address = document.getElementById('address').value;
    const photoInput = document.getElementById('photo');

    const photoDisplay = document.getElementById('photoDisplay');
    if(photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            photoDisplay.src = e.target.result;
        }
        reader.readAsDataURL(photoInput.files[0]);
    }

    document.getElementById('nameDisplay').textContent = Name: ${name};
    document.getElementById('contactDisplay').textContent = Contact: ${contact};
    document.getElementById('addressDisplay').textContent = Address: ${address};

    document.getElementById('details').classList.remove('hidden');

    // Call button
    document.getElementById('callBtn').onclick = function() {
        window.location.href = tel:${contact};
    };

    // WhatsApp button
    document.getElementById('whatsappBtn').onclick = function() {
        window.open(https://wa.me/${whatsapp});
    };

    // GPS location
    document.getElementById('locationBtn').onclick = function() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                document.getElementById('locationDisplay').textContent = Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude};
            }, function(){
                alert('Unable to fetch location');
            });
        } else {
            alert('Geolocation not supported');
        }
    };
});