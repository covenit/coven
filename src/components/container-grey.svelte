<script>
  export let ifSubitutle = '';
  export let ifTitle = '';
</script>

<section class="container-grey padding-lr padding-bt">
    <h6>{ifSubitutle}</h6>
    <h2>{ifTitle}</h2>
    <br>
    <slot></slot>
</section>

<style> 
    section {
        text-align: center;
        background-color: #EEEEEE;
    }

    h6{
        font-weight: 800;
        font-size: 18px;
        line-height: 52px;
        letter-spacing: -2%;
        text-align: center;
        color: #E20C18;
    }

    h2 {
        font-family: 'sf-ui-display-medium';
        font-weight: 800;
        font-size: 32px;
        line-height: 52px;
        letter-spacing: -2%;
        text-align: center;
        color: #2F2F2F;
    }
</style>