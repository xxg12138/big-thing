$(function() {
    $('#link_reg').on('click', function() {
        $('.login-box').hide();
        $('.reg-box').show();
    })

    $('#link_login').on('click', function() {
        $('.login-box').show();
        $('.reg-box').hide();
    })
    let form = layui.form;
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repwd: function(value) {
            let pwd = $('.reg-box [name=password]').val();
            if (pwd !== value) {
                return '两次密码不一致';
            }
        }
    })

    $('#form_login').on('submit', function(e) {
        e.preventDefault();
        var data = {
            username: $('#name').val(),
            password: $('#pwd').val(),
        };
        console.log(data.username);
        $.post('http://127.0.0.1:3007/api/login', data, function(res) {
            console.log(res);
        })
    })

    $('#form_reg').on('submit', function(e) {
        e.preventDefault();
        var data = {
            username: $('#name').val(),
            password: $('#pwd').val(),
        };
        console.log(data.username);
        $.post('http://127.0.0.1:3007/api/reguser', data, function(res) {
            console.log(res);
        })
    })



})