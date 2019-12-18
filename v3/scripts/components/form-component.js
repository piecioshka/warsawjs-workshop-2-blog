class FormComponent {
    createTitleField($form) {
        const $title = document.createElement('input');
        $title.setAttribute('placeholder', 'Wpisz tytuł ...');
        $title.setAttribute('name', 'title');
        $title.setAttribute('required', 'true');
        $title.classList.add('form-control', 'my-3');
        $form.append($title);
    }

    createBodyField($form) {
        const $body = document.createElement('textarea');
        $body.setAttribute('placeholder', 'Wpisz treść ...');
        $body.setAttribute('name', 'body');
        $body.setAttribute('required', 'true');
        $body.classList.add('form-control', 'my-3');
        $form.append($body);
    }

    createSubmitButton($form) {
        const $submit = document.createElement('input');
        $submit.classList.add('btn', 'btn-primary');
        $submit.type = "submit";
        $submit.value = "Dodaj";
        $form.append($submit);
    }

    display($target) {
        const $form = document.createElement('form');
        this.createTitleField($form);
        this.createBodyField($form);
        this.createSubmitButton($form);
        $target.append($form);
        return $form;
    }
}
