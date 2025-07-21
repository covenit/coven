<script>
  export let ifSubitutle = '';
  export let ifTitle = '';
  export let text = '';
</script>

<section class="container-grey padding-lr padding-bt">
    <h6>{ifSubitutle}</h6>
    <h2>{ifTitle}</h2>
    <br>
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
        font-weight: 400;
        font-size: 18px;
        line-height: 38px;
        letter-spacing: 0%;
        color: #5B5B5B;
        width: 70%;
        margin: 0 auto;
    }
</style>