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
        Schlesierstraße 3 <br>
        64546 Mörfelden-Walldorf <br>
        Germany <br><br>

		<h3>Contact Information</h3>
		E-Mail: hi@research-community.org <br>
        Phone: +49 160 897 8834
        <br><br>

        <h3>Accountability for Content</h3>
        Some content may be user-generated. We do not take responsibility for this content, but we are moderating it to the best of our abilities. <br><br>
		Responsibility for all non-user-generated content lies with us. <br><br>
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
        Cookies are only set and used to provide functionality (Example: Remembering your account). We do not use trackers or analytics software. <br><br>

        <h3>Data Processing</h3>
        This website actively processes and saves your IP address. This is used to provide basic functionality, and prevent potential malicious acts.
        <br><br>
        Your browser or operating system may send other personally identifying data. This data is being ignored.
        <br><br>
		All user data (Example: Your forum account) is secured with modern standards and only saved while it is in use. You are able to delete all data at all times (Example: Deleting your account).
		<br><br>
		No data is ever sent to 3rd parties, unless required by law.
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
	@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Poppins&display=swap');

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
