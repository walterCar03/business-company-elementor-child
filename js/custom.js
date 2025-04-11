document.addEventListener('DOMContentLoaded', function() {
    // Cambiar texto y agregar clases
    document.querySelectorAll('.form-upload-report .forminator-file-upload .forminator-button-upload').forEach(el => {
        el.textContent = 'Choisir le fichier';
        el.classList.add('form-upload-mian-btn');
    });

    document.querySelectorAll('.forminator-row-last .forminator-button-submit, #um_account_submit_general, #um-submit-btn, #um_account_submit_password').forEach(el => {
        el.classList.add('form-upload-mian-btn');
    });

    // Cambiar textos varios
    document.querySelectorAll('.form-upload-report .forminator-file-upload span').forEach(el => {
        el.textContent = 'Aucun fichier choisi';
    });

    document.querySelectorAll('.um-field-checkbox-option').forEach(el => {
        el.textContent = 'Rester connecté';
    });

    document.querySelectorAll('.um-link-alt').forEach(el => {
        el.textContent = 'Mot de passe oublié?';
    });

    // Eliminar elementos
    document.querySelectorAll('.um-account-meta.radius-1').forEach(el => el.remove());

    // Modificar textos en formulario de password
    document.querySelectorAll('.post-password-form p:first-child').forEach(el => {
        el.textContent = 'Entrez le mot de passe fourni dans le courriel pour accéder à votre analyse de rapport gratuite.';
    });

    document.querySelectorAll('.post-password-form p label').forEach(label => {
        let html = label.innerHTML;
        html = html.replace('Password', 'Mot de passe');
        label.innerHTML = html;
    });

    // Modificar títulos
    document.querySelectorAll('.post-password-required .entry-title, .post-password-protected .entry-title').forEach(el => {
        el.textContent = "Votre rapport d'inspection analysé";
    });

    // Modificar botón submit
    document.querySelectorAll('.post-password-form p input[type="submit"]').forEach(input => {
        input.value = 'Entrer';
        input.classList.add('form-password-mian-btn');
    });

    // Eliminar header
    document.querySelector('#post-3327 .entry-header')?.remove();

    // Modificar textos de reset password
    document.querySelectorAll('.um-page-password-reset .um-um_password_id .um-form .um-field-type_block .um-field-block div').forEach(el => {
        el.textContent = "Pour réinitialiser votre mot de passe, veuillez saisir votre adresse e-mail ou votre nom d'utilisateur ci-dessous.";
    });

    document.querySelectorAll('.um-page-password-reset #username_b').forEach(el => {
        el.setAttribute('placeholder', 'Entrez votre nom d\'utilisateur ou votre e-mail');
    });

    document.querySelectorAll('.um-page-password-reset #um-submit-btn').forEach(el => {
        el.value = 'Réinitialiser le mot de passe';
    });

    // Modificar labels de password
    document.querySelectorAll('.um-page-password-reset #um_field_0_user_password label').forEach(el => {
        el.textContent = 'Nouveau mot de passe';
    });

    document.querySelectorAll('.um-page-password-reset #um_field_0_confirm_user_password label').forEach(el => {
        el.textContent = 'Confirmez le mot de passe';
    });

    document.querySelectorAll('.um-page-password-reset #um_field_0_confirm_user_password #confirm_user_password').forEach(el => {
        el.setAttribute('placeholder', 'Confirmez le mot de passe');
    });

    // Modificar opciones de perfil
    const profileOptions = {
        '.um-profile .um-profile-photo .um-dropdown-b .um-manual-trigger': 'Télécharger une photo',
        '.um-profile .um-profile-photo .um-dropdown-b .um-reset-profile-photo': 'Supprimer la photo',
        '.um-profile .um-profile-photo .um-dropdown-b .um-dropdown-hide': 'Annuler'
    };

    Object.entries(profileOptions).forEach(([selector, text]) => {
        document.querySelectorAll(selector).forEach(el => el.textContent = text);
    });

    // Manejar mensajes de error registro de inspecteur y courtier
    const errorMessagesReg = {
        '#um-error-for-user_email-27': 'You must provide your email',
        '#um-error-for-user_password-27': 'Mot de passe is required',
        '#um-error-for-user_email-2679': 'You must provide your email',
        '#um-error-for-user_password-2679': 'Mot de passe is required'
    };

    Object.entries(errorMessagesReg).forEach(([selector, original]) => {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = element.innerHTML.replace(original, original.startsWith('Mot') 
                ? 'Un mot de passe est requis' 
                : 'Vous devez fournir votre email');
        }
    });

    // Manejar mensajes de error login
    const errorMessagesLogin = {
        '#um-error-for-username-28': 'Please enter your username or email',
        '#um-error-for-user_password-28': 'Please enter your password',
    };

    Object.entries(errorMessagesLogin).forEach(([selector, original]) => {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = element.innerHTML.replace(original, original.startsWith('Please enter your password') 
                ? "Veuillez entrer votre mot de passe" 
                : "Veuillez entrer votre nom d'utilisateur ou votre e-mail");
        }
    });
});