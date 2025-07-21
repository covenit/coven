<script>
  export let image = '';
  export let title = '';
  export let text = '';
</script>

<div class="container">
    <div>
        <h2>{title}</h2>
        <br>
        <p>{text}</p>
        <slot></slot>
    </div>
    <img src={image} alt="Image Right Section">
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container div {
        max-width: 45%;
    }

    h2 {
        text-align: left;
    }

    img {
        max-width: 40%;
        height: auto;
    }

    p{
        font-size: 16px !important;    
        line-height: 38px;
        letter-spacing: 0%;
        color: #5B5B5B;
    }

    @media (max-width: 767px) {
        .container {
            display: block;
        }
        .container div {
            max-width: 100%;
        }
        img {
            max-width: 100%;
            height: auto;
            margin-top: 3vh;
        }
    }
</style>