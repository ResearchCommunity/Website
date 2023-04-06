<script lang="ts">
	import { Button } from 'sveltestrap';
	import Footer from '$lib/components/footer.svelte'
</script>

<a href="/" id="homebutton"><Button color="warning"><i class="fa-solid fa-house"></i></Button></a>

<div id="content">
	<div class="content-box">
		<h1>Legal Disclosure</h1>

		Information in accordance with Section 5 TMG <br>
        (German law stuff)<br /><br />

		<h3>Represented By</h3>
		Xenorio - Management <br>
        Marcus Huber <br>
        Postfach 22 45 <br>
        64533 Mörfelden-Walldorf <br>
        Germany <br><br>

		<h3>Contact Information</h3>
		E-Mail: business@xenorio.xyz <br>
        Phone: +49 160 897 8834
        <br><br>

        <h3>Accountability for Content</h3>
        "Xenorio - Management" is fully responsible for any content found on this website. <br><br>
        Please note that we are not obliged to monitor transmitted or saved information of third parties. <br><br>
        Also, we are not obliged to investigate circumstances pointing to illegal activity.
        <br><br>

        <h3>Accountability for Links</h3>
        Responsibility for content on websites of third parties which are linked on this website lies with the operators of the linked websites. <br><br>
        At the time of linking, no violations were evident to us.

	</div>
	<div class="content-box">
		<h1>Privacy Policy</h1>
		
        <h3>Cookies &amp; Trackers</h3>
        We do not set or use any cookies or other means of tracking <br><br>

        <h3>Data Processing</h3>
        This website actively processes and saves your IP address. This is used to provide basic functionality, and prevent potential malicious acts.
        <br><br>
        Your browser or operating system may send other personally identifying data. This data is being ignored.
        <br><br>
        Our servers are entirely located in Europe (Finland). We abide by european data protection laws. 
        <br><br>

        <h3>3rd Parties</h3>
        Some resources are being loaded from 3rd parties. <br>
        These are: <br><br>
        <ul>
            <li>cloudflare.com | FontAwesome Library</li>
            <li>jsdelivr.net | Bootstrap Library</li>
            <li>google.com | Fonts</li>
        </ul>
        <br>
        By loading these resources, you are potentially sending personally identifying information to these services. 
	</div>
</div>

<Footer />

<style>
	#content {
		text-align: center;
		font-family: 'Poppins', sans-serif;
		margin-top: 3rem;
	}
	.content-box {
		background-color: #242424;
		border-radius: 25px;
		padding: 3rem;
		max-width: 75%;
		display: block;
		color: white;
		margin-bottom: 5rem;
		font-size: x-large;
		margin-left: 50%;
		transform: translateX(-50%);
	}

	.content-box h1 {
		font-family: 'Concert One', cursive;
		margin-bottom: 2rem;
	}

    .content-box h3 {
		text-decoration: underline;
	}

    #homebutton {
        position: absolute;
        top: 2rem;
        left: 2rem;
    }

	@media screen and (max-width: 800px) {
		.content-box {
			width: 100%;
		}
	}
</style>
