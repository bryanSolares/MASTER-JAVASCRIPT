$(document).ready(() => {

    $(function () {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            infiniteLoop: true
        });
    });

    //posts
    var posts = [
        {
            title: "Prueba Titulo 1",
            date: "Publicado: " + moment().format("MMMM Do YYYY"),
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea minima omnis
            perspiciatis magni
            dolores, dolorem eaque modi labore cumque dolor deserunt adipisci cum distinctio. Rerum
            similique quo deleniti quaerat.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi ratione in harum fuga quo,
            aliquid sint similique sed est non voluptatem, aperiam deserunt eligendi! Quo non sed aliquid
            veniam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo incidunt eveniet mollitia.
            Perferendis hic qui esse consequuntur. Et optio ratione iusto repudiandae iure obcaecati,
            deleniti vel maiores delectus explicabo sed!`
        },
        {
            title: "Prueba Titulo 2",
            date: "Publicado: " + moment().format("MMMM Do YYYY"),
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea minima omnis
            perspiciatis magni
            dolores, dolorem eaque modi labore cumque dolor deserunt adipisci cum distinctio. Rerum
            similique quo deleniti quaerat.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi ratione in harum fuga quo,
            aliquid sint similique sed est non voluptatem, aperiam deserunt eligendi! Quo non sed aliquid
            veniam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo incidunt eveniet mollitia.
            Perferendis hic qui esse consequuntur. Et optio ratione iusto repudiandae iure obcaecati,
            deleniti vel maiores delectus explicabo sed!`
        },
        {
            title: "Prueba Titulo 3",
            date: "Publicado: " + moment().format("MMMM Do YYYY"),
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea minima omnis
            perspiciatis magni
            dolores, dolorem eaque modi labore cumque dolor deserunt adipisci cum distinctio. Rerum
            similique quo deleniti quaerat.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi ratione in harum fuga quo,
            aliquid sint similique sed est non voluptatem, aperiam deserunt eligendi! Quo non sed aliquid
            veniam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo incidunt eveniet mollitia.
            Perferendis hic qui esse consequuntur. Et optio ratione iusto repudiandae iure obcaecati,
            deleniti vel maiores delectus explicabo sed!`
        },
        {
            title: "Prueba Titulo 4",
            date: "Publicado: " + moment().format("MMMM Do YYYY"),
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea minima omnis
            perspiciatis magni
            dolores, dolorem eaque modi labore cumque dolor deserunt adipisci cum distinctio. Rerum
            similique quo deleniti quaerat.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi ratione in harum fuga quo,
            aliquid sint similique sed est non voluptatem, aperiam deserunt eligendi! Quo non sed aliquid
            veniam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo incidunt eveniet mollitia.
            Perferendis hic qui esse consequuntur. Et optio ratione iusto repudiandae iure obcaecati,
            deleniti vel maiores delectus explicabo sed!`
        },
        {
            title: "Prueba Titulo 5",
            date: "Publicado: " + moment().format("MMMM Do YYYY"),
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea minima omnis
            perspiciatis magni
            dolores, dolorem eaque modi labore cumque dolor deserunt adipisci cum distinctio. Rerum
            similique quo deleniti quaerat.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea modi ratione in harum fuga quo,
            aliquid sint similique sed est non voluptatem, aperiam deserunt eligendi! Quo non sed aliquid
            veniam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo incidunt eveniet mollitia.
            Perferendis hic qui esse consequuntur. Et optio ratione iusto repudiandae iure obcaecati,
            deleniti vel maiores delectus explicabo sed!`
        }
    ]

    var seccion_posts = $("#posts");

    posts.forEach((elemento) => {
        let post = `
            <article class="post">
                <h2 class="post-title">${elemento.title}</h2>
                <span class="post-date">${elemento.date}</span>
                <p class="post-block">${elemento.data}</p>
                <a href="#" class="button-more">Leer más.</a>
            </article>
        `;

        seccion_posts.append(post);

    });


    /*TEMAS*/
    const button_green = $("#button-green");
    const button_red = $("#button-red");
    const button_blue = $("#button-blue");
    const theme = $("#theme");

    button_green.click(() => {
        theme.attr("href", "CSS/green.css");
    });

    button_red.click(() => {
        theme.attr("href", "CSS/red.css");
    });

    button_blue.click(() => {
        theme.attr("href", "CSS/blue.css");
    });

    /*SUBIR*/
    $(".up").click((evento) => {
        evento.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    /*LOGIN FALSO*/
    const form_login = $("#form-login");
    const name = $("#name");
    const email = $("#email");
    const password = $("#password");

    form_login.submit(() => {
        localStorage.setItem("form-name", name.val());
        localStorage.setItem("form-email", email.val());
        localStorage.setItem("form-pass", password.val());
    });

    if (localStorage.getItem("form-name") != null) {
        $(".about-block").html("Bienvenido " + localStorage.getItem("form-name"));
        $(".about-block").append("<a href='#' id='logout'>Cerrar Sesión</a>")
        $("#login").hide();
    } else {
        $(".about-block").html("Aún no has iniciado sesión");
    }

    $("#logout").click(() => {
        localStorage.clear();
        location.reload();
    });

    $("#acordeon").accordion();

    setInterval(() => {
        var timer = moment().format("h:mm:ss");
        $("#timer").html(timer);
    }, 1000);

    $("form input[name='fecha_nac']").datepicker({
        dateFormat: "dd-mm-yy"
    });

    $.validate({
        lang: "es",
        errorMessagePosition: "top",
        scrollTopOnError: true
    });

});
