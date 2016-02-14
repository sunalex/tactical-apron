$(document).ready(function () {

    $('.alert').hide();

    $(function () {
        $('.close-alert').click(function () {
            $('.alert').hide();
        });
    });

    $(".form").each(function (formIndex, formElement) {
        $(formElement).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 7
                },
                city: {
                    required: true,
                    minlength: 2
                },
                address: {
                    required: true,
                    minlength: 7
                }

            },
            messages: {
                name: {
                    required: "Пожалуйста, корректно заполните поле.",
                    minlength: "Введите больше 2 символов."
                },
                phone: {
                    required: "Пожалуйста, корректно заполните поле.",
                    minlength: "Введите больше 7 символов."
                },
                city: {
                    required: "Пожалуйста, корректно заполните поле.",
                    minlength: "Введите больше 2 символов."
                },
                address: {
                    required: "Пожалуйста, корректно заполните поле.",
                    minlength: "Введите больше 7 символов."
                }
            },
            submitHandler: function (form) {
                var $form = $(form);
                $.post('send.php', $form.serialize(), function (data) {
                    $('.form-control').removeClass('valid');
                    $(document).ready(function () {
                        $('.form-control').val('');
                        $('.modal').modal('hide');

                        $('.alert').show();

                        $(function () {
                            $("html, body").animate({ scrollTop: 0 }, "slow");
                            return false;
                        });
                    });
                });
            }
        });
    });

});