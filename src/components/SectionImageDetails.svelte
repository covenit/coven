<script>
    export let imageDetails = "";
    export let details;
</script>

<section class="padding-bt padding-lr"> 
    <div>
        <img src={imageDetails} alt="">
    </div>
    <div>
       <ul>
            {#each details as item}
                <li>
                    <div>{item.id}</div>
                    <span class="title">{item.title}</span>
                    <p>{item.text}</p>
                </li>
            {/each}
       </ul>
    </div>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: start;
    }
    section > div {
        width: 40%;
    }
    img {
        height: 100%;
    }
    ul {
        list-style: none;
    }
    ul li {
        font-size: 16px;
        line-height: 115.99999999999999%;
        letter-spacing: -2%;
        color: #5B5B5B;
        display: flex;
        align-items: center;   
        flex-wrap: wrap;  
        gap: 5px;
        margin-bottom: 1vh;
    }
    ul li span {
        font-family: 'sf-ui-display-bold';
        color: #E20C18;
        margin: 0 1vh;
    }
    ul li div {
        width: 20px;
        height: 20px;
        top: 68px;
        left: 723px;
        gap: 7.14px;
        border-radius: 30px;
        background: #E20C18;
        color: white;
        font-family: 'sf-ui-display-medium';
        text-align: center;
        font-size: 11.72px;
        line-height: 20px;
        letter-spacing: -2%;
    }

    @media (max-width: 767px) {
        section {
            display: block;
        }
        img {
            height: auto;
            width: 100%;
            margin-bottom: 5vh;
        }
    }
</style>