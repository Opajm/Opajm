<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>opime.online</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #fff;
            background-color: #121212;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            margin-bottom: 40px;
            flex-wrap: wrap;
            background-color: #1e1e1e;
            border-radius: 20px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 25px;
        }

        nav ul.left {
            margin-right: auto;
        }

        nav ul.right {
            margin-left: auto;
        }

        nav a {
            text-decoration: none;
            color: #fff;
            font-weight: 600;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 12px 24px;
            border-radius: 50px;
            background-color: #2a2a2a;
            transition: all 0.3s ease;
            border: 2px solid #444;
        }

        img {
            height: 80px;
            width: 80px;
        }

        nav a:hover {
            background-color: #fff;
            color: #121212;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
        }

        main {
            flex: 1;
        }

        .center {
            text-align: center;
            padding: 80px 40px;
            margin-bottom: 60px;
            background: linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%);
            border-radius: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
        }

        .center h1 {
            font-size: 3.8rem;
            margin-bottom: 25px;
            color: #fff;
            letter-spacing: 3px;
            text-transform: uppercase;
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        }

        .center h2 {
            font-size: 1.6rem;
            margin-bottom: 50px;
            color: #ccc;
            font-weight: 400;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.8;
        }

        .center a {
            display: inline-block;
            text-decoration: none;
            color: #fff;
            background-color: transparent;
            border: 2px solid #fff;
            padding: 16px 40px;
            margin: 0 15px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            border-radius: 50px;
            transition: all 0.3s ease;
        }

        .center a:hover {
            background-color: #fff;
            color: #121212;
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
        }

        .down {
            margin-bottom: 80px;
            padding: 50px;
            background-color: #1e1e1e;
            border-radius: 25px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
            border: 1px solid #333;
        }

        .down h2 {
            font-size: 2.2rem;
            margin-bottom: 30px;
            color: #fff;
            padding-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            position: relative;
        }

        .down h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100px;
            height: 4px;
            background: linear-gradient(90deg, #fff, #666);
            border-radius: 2px;
        }

        .down p {
            margin-bottom: 25px;
            color: #ddd;
            font-size: 1.15rem;
            line-height: 1.8;
        }

        #signature {
            font-style: italic;
            font-weight: 600;
            margin-top: 40px;
            text-align: right;
            color: #fff;
            padding-right: 20px;
            position: relative;
        }

        #signature a {
            font-style: italic;
            font-weight: 600;
            margin-top: 40px;
            text-align: right;
            color: #fff;
            padding-right: 20px;
            position: relative;
            text-decoration: none;
        }

        #signature a:visited {
            font-style: italic;
            font-weight: 600;
            margin-top: 40px;
            text-align: right;
            color: #fff;
            padding-right: 20px;
            position: relative;
            text-decoration: none;
        }

        #signature::before {
            content: "—";
            margin-right: 10px;
        }

        .down a:not(#team-sign) {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            padding: 10px 20px;
            background-color: #2a2a2a;
            border-radius: 25px;
            border: 2px solid #444;
            transition: all 0.3s ease;
            display: inline-block;
            margin-top: 15px;
        }

        .down a:not(#team-sign):hover {
            background-color: #fff;
            color: #121212;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
        }
        .down span{
            color: #aaa;
            font-size: 0.9rem;
            margin-left: 30px;
        }

        footer {
            text-align: center;
            padding: 35px;
            margin-top: 40px;
            background-color: #1e1e1e;
            border-radius: 20px;
            color: #aaa;
            font-size: 1rem;
            border-top: 2px solid #333;
            box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.3);
        }

        footer p {
            letter-spacing: 1px;
        }

        @media (max-width: 768px) {
            nav {
                flex-direction: column;
                gap: 20px;
                padding: 20px;
            }
            
            nav ul {
                width: 100%;
                justify-content: center;
                flex-wrap: wrap;
                gap: 15px;
            }
            
            nav ul.left, nav ul.right {
                margin: 0;
            }
            
            nav a {
                padding: 10px 20px;
                font-size: 1rem;
            }
            
            .center {
                padding: 60px 20px;
                border-radius: 20px;
            }
            
            .center h1 {
                font-size: 2.8rem;
            }
            
            .center h2 {
                font-size: 1.3rem;
                padding: 0 10px;
            }
            
            .center a {
                display: block;
                margin: 15px auto;
                max-width: 250px;
                padding: 14px 30px;
            }
            
            .down {
                padding: 30px;
                border-radius: 20px;
            }
            
            .down h2 {
                font-size: 1.8rem;
            }
        }

        @media (max-width: 480px) {
            body {
                padding: 15px;
            }
            
            nav {
                padding: 15px;
                border-radius: 15px;
            }
            
            nav a {
                font-size: 0.9rem;
                padding: 8px 16px;
            }
            
            .center {
                padding: 40px 15px;
                border-radius: 15px;
            }
            
            .center h1 {
                font-size: 2.2rem;
            }
            
            .center h2 {
                font-size: 1.1rem;
            }
            
            .down {
                padding: 25px 20px;
                border-radius: 15px;
            }
            
            footer {
                padding: 25px;
                border-radius: 15px;
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        nav, .center, .down, footer {
            animation: fadeInUp 0.6s ease-out forwards;
        }

        .down:nth-child(2) {
            animation-delay: 0.2s;
        }

        .down:nth-child(3) {
            animation-delay: 0.4s;
        }

        footer {
            animation-delay: 0.6s;
        }
    </style>
</head>
<body>
    <nav>
        <ul class="left">
            <li><img src="logo.png" alt="Strona główna"></li>
        </ul>
        <ul class="right">
            <li><a href="anchorhost.html">AnchorHost</a></li>
            <li><a href="#contact">Kontakt</a></li>
            <li><a href="#about_project">O projekcie</a></li>
        </ul>
    </nav>
    
    <main>
        <div class="center">
            <h1>opime.online</h1>
            <h2>Projekt jest obecnie w trakcie realizacji.</h2>
            <a href="#about_project">Projekt</a> <a href="anchorhost.html">Hosting</a> <a href="team.html">Zespół</a>
        </div>
        
        <div class="down" id="about_project">
            <h2>O projekcie</h2>
            <p>Projekt opime.online ma na celu stworzenie centrum rozrywki dla użytkowników, umożliwiającego granie zarówno samodzielnie, jak i z innymi. W ramach projektu powstaną tryby dostosowane do różnej wielkości grup. Obejmie on różnego rodzaju gry i tryby, aby zaspokoić zróżnicowane potrzeby użytkowników.</p>
            <p>W pierwszej fazie rozpoczęliśmy tworzenie serwera gry Minecraft, który obejmie popularne tryby, takie jak Skyblock, Oneblock i Survival, a także starsze, mniej już spotykane modele rozgrywki, jak Dragon Escape czy Bomb Lobbers. Serwer początkowo wystartuje z kilkoma trybami, a z czasem będzie otrzymywać aktualizacje wprowadzające nowe tryby, a w przyszłości – również kolejne gry.</p>
            <p>W razie zmian planujemy prowadzić ankiety, które pomogą zadecydować, jakie nowości wprowadzać.</p>
            <p id="signature">Z poważaniem, <a href="team.html" id="team-sign">Twórcy opime.online</a></p>
        </div>
        
        <div class="down" id="contact">
            <h2>Kontakt</h2>
            <p>W przypadku pytań lub sugestii dotyczących projektu opime.online, prosimy o kontakt na naszym githubie(w formie problemów).</p>
            <a href="https://github.com/Opajm/Opajm/issues">Kontakt poprzez repozytorium</a> <span>W celu szybszej odpowiedzi prosimy o kategoryzację zapytań.</span>
        </div>
    </main>
    
    <footer>
        <p>© 2025 opime.online.</p>
    </footer>
</body>

</html>
