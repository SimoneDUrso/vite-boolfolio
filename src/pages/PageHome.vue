<script>
export default {
    
}
</script>

<template>
    <div class="hero-section">
        <div class="container text-center text-light">
            <div class="row">
                <div class="col-12 mt-5">
                    <h1>Welcome to My Portfolio</h1>
                    <p class="lead mt-4">I'm a passionate developer with a love for creating amazing web experiences.</p>
                    <a href="/portfolio" class="btn btn-primary btn-lg mt-4">Explore My Projects</a>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.hero-section {
    height:calc( 100vh - 56px);
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-size: cover;
    position: relative;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    .container {
        z-index: 2;
    }

    h1 {
        font-size: 4rem;
        font-weight: bold;
    }

    .btn {
        font-size: 1.25rem;
        padding: 10px 30px;
    }

}
</style>