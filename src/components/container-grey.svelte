<script>
  export let ifSubitutle = '';
  export let ifTitle = '';
  export let text = '';
</script>

<section class="container-grey padding-lr padding-bt">
    <h6>{ifSubitutle}</h6>
    <h2 class="h2-container">{ifTitle}</h2>
    <p>{text}</p>
    <slot></slot>
</section>

<style> 
    .container-grey {
        text-align: center;
        background-color: #EEEEEE;
    }

    p {
        font-family: 'sf-ui-display-regular';
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 0%;
        color: #5B5B5B;
        width: auto;
        margin: 0 auto;
        padding: 2vh 30vh;
    }

    @media (max-width: 767px) {
        .container-grey {
            text-align: start;
        }
        p {
            width: 100%;
            font-size: 16px;
            line-height: 25px;
            padding: 2vh 0vh;
        }
    }
</style>