<script>
	import Icon from '@iconify/svelte';
</script>

<footer>
        <div class="container">
                <p>&copy; <span id="year" />Geo-Coded {new Date().getFullYear()}. All rights reserved.</p>
		<p>
			Made with <span style="color: #eb345e">♥</span> using <a href="https://kit.svelte.dev/">SvelteKit</a>, hosted on
			<a href="https://www.netlify.com/">Netlify</a>.
		</p>
		<div class="social-links">
                        <a href="https://www.twitter.com/geo_coded" rel="noreferrer" target="_blank"><Icon icon="mdi:twitter" /></a>
                        <a href="https://www.github.com/geo-coded" rel="noreferrer" target="_blank"><Icon icon="mdi:github" /></a>
                        <a href="https://discord.com/users/1077943866314981466" rel="noreferrer" target="_blank"><Icon icon="ic:round-discord" /></a>
                        <a href="https://www.reddit.com/u/probablygeocoded" rel="noreferrer" target="_blank"><Icon icon="ic:round-reddit" /></a>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		position: relative;
		margin-top: 3rem;
		padding: 20px 0;
		background: $clr-bg-3;

		a {
			color: $accent-0;
			transition: color 0.2s;

			@include hover {
				color: $clr-fg-2;
			}
		}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 1px;
			background-image: linear-gradient(90deg, rgba(255, 0, 187, 1) 0%, rgba(182, 0, 255, 1) 50%, rgba(255, 173, 0, 1) 100%);
		}
		.container {
			margin: 0 auto;
			max-width: 1225px;
			margin-left: 6rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			p {
				margin: 0;
				font-size: 14px;
			}

			.social-links {
				a {
					display: inline-block;
					margin-right: 10px;

					:global(svg) {
						font-size: 18px;
						color: $accent-0;
						transition: color 0.2s;

						@include hover {
							color: $clr-fg-2;
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: $tablet) {
		footer {
			margin-top: 1rem;
			margin-bottom: 4rem;
			.container {
				margin-inline: auto;
				padding-inline: 2rem;
				flex-direction: column;
				align-items: center;

				.social-links {
					display: none;
				}
			}
		}
	}
</style>