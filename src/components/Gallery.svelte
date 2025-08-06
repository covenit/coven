<script>

    const images = [
        {i: '../../gallery/1.webp'},
        {i: '../../gallery/2.webp'},
        {i: '../../gallery/3.webp'},
        {i: '../../gallery/4.webp'},
        {i: '../../gallery/5.webp'},
        {i: '../../gallery/6.webp'}
    ]
</script>

<section class="padding-lr padding-bt">
    <h2>Galleria</h2>
    <div class="container-gallery">
        {#each images as image}
        <img src="{image.i}" alt="" srcset="">
        {/each}
    </div>
</section>

<style>
    section {
        background-color: #EEEEEE;
    }
    h2 {
        margin-bottom: 5vh;
    }
    .container-gallery {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;
    }

    @media (max-width: 767px) {
        .container-gallery {
            gap: 20px;
        }
        img {
            width: 45%;
        }
    }

</style>