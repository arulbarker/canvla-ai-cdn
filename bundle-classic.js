
    document.addEventListener('DOMContentLoaded', () => {

        // === I18N ===
        const T = {
            id: {
                'app.tagline': 'Studio Color Grading AI',
                'nav.home': 'Beranda',
                'nav.section': 'Color Grading',
                'home.title': 'Selamat datang di Canvla AI',
                'home.sub': 'Ubah fotomu jadi karya sinematik dengan color grading AI — pilih tema, proses, selesai.',
                'home.s1': 'Unggah foto',
                'home.s1d': 'JPG, PNG, WEBP, atau HEIC dari iPhone — semua bisa.',
                'home.s2': 'Pilih tema color grading',
                'home.s2d': '82 tema di 11 kategori — dari Foggy Forest sampai Cyberpunk Neon. Atau tulis prompt sendiri di Studio Kustom.',
                'home.s3': 'Proses',
                'home.s3d': 'Atur intensitas, rasio (10 pilihan), dan jumlah (1-10 foto) — lalu unduh hasilnya.',
                'home.note': 'Gratis via Google AI Studio — tidak perlu API key. Jalankan app ini di dalam Canvas AI Studio.',
                'wiz.step1': 'Unggah Foto',
                'wiz.step-mode': 'Mode Edit',
                'mode.grading': 'Color Grading',
                'mode.grading-desc': 'Foto 100% asli — hanya warna & tone yang berubah',
                'mode.editor': 'Editor AI',
                'mode.editor-desc': 'AI mendramatisir lingkungan & atmosfer — subjek tetap asli',
                'wiz.step2': 'Pilih Tema',
                'wiz.step3': 'Intensitas Efek',
                'wiz.step4': 'Rasio Foto',
                'wiz.step5': 'Jumlah Hasil',
                'wiz.upload-hint': 'Klik atau tarik foto ke sini',
                'wiz.upload-formats': 'JPG · PNG · WEBP · HEIC',
                'wiz.change-photo': 'Ganti Foto',
                'wiz.custom-label': 'Prompt Tambahan (opsional)',
                'wiz.custom-placeholder': 'Tulis instruksi tambahan...',
                'wiz.custom-required': 'Tulis prompt color grading kamu di sini...',
                'wiz.generate': 'Proses Foto',
                'wiz.stop': 'Hentikan Proses',
                'wiz.results': 'Hasil',
                'wiz.download': 'Unduh',
                'wiz.download-all': 'Unduh Semua',
                'wiz.preview': 'Pratinjau',
                'wiz.empty': 'Hasil akan muncul di sini',
                'wiz.empty-hint': 'Unggah foto lalu klik Proses Foto',
                'wiz.err-upload': 'Silakan unggah foto dulu.',
                'wiz.err-file': 'File tidak didukung. Gunakan JPG, PNG, WEBP, atau HEIC.',
                'wiz.err-custom': 'Tulis prompt dulu di Studio Kustom.',
                'wiz.err-quota': 'Gagal memproses. Akun Google ini kemungkinan mencapai batas — coba ganti akun Google lalu ulangi.',
                'int.subtle': 'Halus',
                'int.medium': 'Sedang',
                'int.strong': 'Kuat',
                'int.max': 'Sangat Kuat',
                'cat.cinematic.name': 'Film Sinematik',
                'cat.cinematic.desc': 'Gradasi warna gaya film Hollywood',
                'cat.forest.name': 'Alam & Hutan',
                'cat.forest.desc': 'Hutan berkabut dan nuansa alam',
                'cat.golden.name': 'Cahaya Emas & Hangat',
                'cat.golden.desc': 'Cahaya emas hangat matahari',
                'cat.moody.name': 'Gelap & Dramatis',
                'cat.moody.desc': 'Gelap, kelam, penuh suasana',
                'cat.vintage.name': 'Vintage & Film Analog',
                'cat.vintage.desc': 'Emulasi film analog klasik',
                'cat.urban.name': 'Kota & Malam',
                'cat.urban.desc': 'Kota malam dan cahaya neon',
                'cat.aesthetic.name': 'Bersih & Estetik',
                'cat.aesthetic.desc': 'Bersih, terang, kekinian',
                'cat.bw.name': 'Hitam Putih',
                'cat.bw.desc': 'Monokrom klasik dan dramatis',
                'cat.weather.name': 'Cuaca & Musim',
                'cat.weather.desc': 'Kabut, hujan, salju, musim',
                'cat.travel.name': 'Wisata & Lanskap',
                'cat.travel.desc': 'Warna khas destinasi dunia',
                'cat.food.name': 'Makanan & Produk',
                'cat.food.desc': 'Foto makanan dan produk menggugah',
                'cat.custom.name': 'Studio Kustom',
                'cat.custom.desc': 'Tulis prompt color grading sendiri',
                'ratio.1:1': 'Kotak',
                'ratio.3:4': 'Potret',
                'ratio.4:3': 'Klasik',
                'ratio.4:5': 'Feed IG',
                'ratio.5:4': 'Besar',
                'ratio.2:3': 'Foto',
                'ratio.3:2': 'DSLR',
                'ratio.9:16': 'Story',
                'ratio.16:9': 'Lebar',
                'ratio.21:9': 'Sinema',
                'login.sub': 'Masuk dengan email pembelianmu',
                'login.email-placeholder': 'Email pembelian...',
                'login.btn': 'Masuk',
                'login.loading': 'Memeriksa akses...',
                'login.buy-title': 'Belum punya akses?',
                'login.buy-lynk': 'Beli di Lynk.id',
                'login.buy-mayar': 'Beli di Mayar',
                'login.err-format': 'Format email tidak valid.',
                'login.err-conn': 'Koneksi gagal. Periksa internet lalu coba lagi.',
                'login.session-ended': 'Sesi berakhir! Akun ini sedang dipakai di perangkat lain. Kamu akan dikembalikan ke halaman login.'
            },
            en: {
                'app.tagline': 'AI Color Grading Studio',
                'nav.home': 'Home',
                'nav.section': 'Color Grading',
                'home.title': 'Welcome to Canvla AI',
                'home.sub': 'Turn your photos into cinematic works with AI color grading — pick a theme, generate, done.',
                'home.s1': 'Upload a photo',
                'home.s1d': 'JPG, PNG, WEBP, or iPhone HEIC — all supported.',
                'home.s2': 'Pick a color grading theme',
                'home.s2d': '82 themes across 11 categories — from Foggy Forest to Cyberpunk Neon. Or write your own in Custom Studio.',
                'home.s3': 'Generate',
                'home.s3d': 'Set intensity, ratio (10 options), and count (1-10 photos) — then download the results.',
                'home.note': 'Free via Google AI Studio — no API key needed. Run this app inside AI Studio Canvas.',
                'wiz.step1': 'Upload Photo',
                'wiz.step-mode': 'Edit Mode',
                'mode.grading': 'Color Grading',
                'mode.grading-desc': 'Photo stays 100% original — only colors & tones change',
                'mode.editor': 'AI Editor',
                'mode.editor-desc': 'AI dramatizes the environment & atmosphere — subject stays intact',
                'wiz.step2': 'Pick a Theme',
                'wiz.step3': 'Effect Intensity',
                'wiz.step4': 'Aspect Ratio',
                'wiz.step5': 'Generate Count',
                'wiz.upload-hint': 'Click or drop a photo here',
                'wiz.upload-formats': 'JPG · PNG · WEBP · HEIC',
                'wiz.change-photo': 'Change Photo',
                'wiz.custom-label': 'Custom Prompt (optional)',
                'wiz.custom-placeholder': 'Add extra instructions...',
                'wiz.custom-required': 'Write your color grading prompt here...',
                'wiz.generate': 'Generate',
                'wiz.stop': 'Stop Generating',
                'wiz.results': 'Results',
                'wiz.download': 'Download',
                'wiz.download-all': 'Download All',
                'wiz.preview': 'Preview',
                'wiz.empty': 'Results will appear here',
                'wiz.empty-hint': 'Upload a photo and hit Generate',
                'wiz.err-upload': 'Please upload a photo first.',
                'wiz.err-file': 'Unsupported file. Use JPG, PNG, WEBP, or HEIC.',
                'wiz.err-custom': 'Write a prompt first in Custom Studio.',
                'wiz.err-quota': 'Generation failed. This Google account may have hit its limit — switch Google accounts and try again.',
                'int.subtle': 'Subtle',
                'int.medium': 'Medium',
                'int.strong': 'Strong',
                'int.max': 'Very Strong',
                'cat.cinematic.name': 'Cinematic Film',
                'cat.cinematic.desc': 'Hollywood movie color grades',
                'cat.forest.name': 'Nature & Forest',
                'cat.forest.desc': 'Foggy woods and nature tones',
                'cat.golden.name': 'Golden Hour & Warm',
                'cat.golden.desc': 'Warm golden sunlight',
                'cat.moody.name': 'Moody & Dark',
                'cat.moody.desc': 'Dark, somber, atmospheric',
                'cat.vintage.name': 'Vintage & Film',
                'cat.vintage.desc': 'Classic analog film emulation',
                'cat.urban.name': 'Urban & Night',
                'cat.urban.desc': 'Night city and neon light',
                'cat.aesthetic.name': 'Clean & Aesthetic',
                'cat.aesthetic.desc': 'Clean, bright, modern',
                'cat.bw.name': 'Black & White',
                'cat.bw.desc': 'Classic and dramatic monochrome',
                'cat.weather.name': 'Weather & Season',
                'cat.weather.desc': 'Mist, rain, snow, seasons',
                'cat.travel.name': 'Travel & Landscape',
                'cat.travel.desc': 'Signature destination palettes',
                'cat.food.name': 'Food & Product',
                'cat.food.desc': 'Appetizing food and product shots',
                'cat.custom.name': 'Custom Studio',
                'cat.custom.desc': 'Write your own grading prompt',
                'ratio.1:1': 'Square',
                'ratio.3:4': 'Portrait',
                'ratio.4:3': 'Classic',
                'ratio.4:5': 'IG Feed',
                'ratio.5:4': 'Large',
                'ratio.2:3': 'Photo',
                'ratio.3:2': 'DSLR',
                'ratio.9:16': 'Story',
                'ratio.16:9': 'Wide',
                'ratio.21:9': 'Cinema',
                'login.sub': 'Log in with your purchase email',
                'login.email-placeholder': 'Purchase email...',
                'login.btn': 'Log In',
                'login.loading': 'Checking access...',
                'login.buy-title': "Don't have access yet?",
                'login.buy-lynk': 'Buy on Lynk.id',
                'login.buy-mayar': 'Buy on Mayar',
                'login.err-format': 'Invalid email format.',
                'login.err-conn': 'Connection failed. Check your internet and try again.',
                'login.session-ended': 'Session ended! This account is being used on another device. You will be returned to the login page.'
            }
        };
        let LANG = localStorage.getItem('app_language') || 'id';
        const t = (k) => (T[LANG] && T[LANG][k]) || T.id[k] || k;
        function applyI18n() {
            document.documentElement.lang = LANG;
            document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
        }
        document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => {
            LANG = b.dataset.lang;
            localStorage.setItem('app_language', LANG);
            document.querySelectorAll('.lang-btn').forEach(x => x.classList.toggle('selected', x.dataset.lang === LANG));
            applyI18n();
        }));

        // === DATA ===
        const PRESERVE = "This is strictly a COLOR GRADING edit only. Do NOT add, remove, replace, move, or invent ANY object or element — no new trees, plants, fog banks, clouds, people, buildings, props, or scenery of any kind. Keep the original composition, subject, pose, clothing, facial features, expression, camera angle, perspective, framing, and every background element exactly identical to the source photo; only the colors, tones, contrast, and lighting mood may change. Increase overall image quality to ultra-high-definition 4K resolution with razor-sharp details, HDR enhancement, realistic textures, balanced contrast, and natural color harmony. The final result must look like the exact same photograph professionally color graded, fully photorealistic, not AI-generated artwork.";
        const INTENSITY = {
            subtle: "Apply the effect subtly and gently, a restrained and natural touch of the grade. ",
            medium: "",
            strong: "Apply the effect boldly and dramatically, deep, intense, unmistakably cinematic grading. ",
            max: "Apply the effect at MAXIMUM strength: extremely bold, heavy, deep and dramatic, push the grade and its atmosphere as far as it can go while remaining photorealistic. "
        };
        const EDITOR_TRANSFORM = "Fully transform this photo in the described style: dramatically enhance the environment, sky, vegetation, atmosphere, and lighting to match the style completely. Atmospheric elements such as fog, mist, clouds, and volumetric light rays may be added or intensified realistically, and existing background elements may be enriched, deepened, and beautified. ";
        const PRESERVE_EDITOR = "Preserve the main subject with absolute fidelity: the exact same person or people with identical faces, identity, expressions, poses, clothing, and body proportions — do not add, remove, or alter any person. Keep the same camera angle, perspective, and framing. The final result must be fully photorealistic like a premium DSLR photograph in ultra-high-definition 4K quality with razor-sharp details, HDR enhancement, realistic textures, and natural color harmony, not AI-generated artwork.";
        const PRESERVE_FOG = "Do NOT add, remove, replace, move, or invent ANY physical object — no new trees, plants, people, buildings, props, or scenery of any kind; ONLY fog, mist, atmosphere, light, and color may be changed or added. Keep the original composition, subject, pose, clothing, facial features, expression, camera angle, perspective, framing, and every background element exactly identical to the source photo. Increase overall image quality to ultra-high-definition 4K resolution with razor-sharp details, HDR enhancement, realistic textures, balanced contrast, and natural color harmony. The final result must look like the exact same photograph captured in dense fog, fully photorealistic, not AI-generated artwork.";
        const CATEGORIES = [
            { id: 'cinematic', fa: 'fa-film', presets: [
                { id: 'teal-orange', name: 'Teal & Orange Blockbuster', prompt: `Transform this image with a Hollywood blockbuster teal and orange color grade. Push shadows and midtones toward rich cinematic teal, warm the skin tones and highlights toward golden orange, and add gentle film contrast with a soft anamorphic feel, ${PRESERVE}` },
                { id: 'lotr-sunrise', name: 'LOTR Fantasy Sunrise', prompt: `Edit this photo into a cinematic The Lord of the Rings style. Transform the lighting into a soft sunrise from the upper left with natural god rays, subtle volumetric lighting, gentle morning mist, and a soft cinematic lens flare. Apply a rich, natural color grade with deep greens, warm golden-hour highlights, a clean blue sky, accurate skin tones, and soft neutral shadows without an orange or yellow cast. Create an immersive fantasy atmosphere inspired by The Lord of the Rings that still looks like a genuine sunrise photograph, ${PRESERVE}` },
                { id: 'film-noir', name: 'Film Noir', prompt: `Transform this image into a classic film noir look. Apply very high contrast with crushed inky blacks, gleaming silver highlights, hard dramatic key light with deep sculpted shadows, and a cold near-monochrome palette with the faintest trace of color, ${PRESERVE}` },
                { id: 'scifi-blue', name: 'Sci-Fi Cool Blue', prompt: `Transform this image with a futuristic science-fiction color grade. Bathe the scene in cold steel blue and cyan tones, add crisp cyan rim lighting on edges, clean sterile highlights, and deep slate shadows for a high-tech cinematic atmosphere, ${PRESERVE}` },
                { id: 'wes-anderson', name: 'Wes Anderson Pastel', prompt: `Transform this image with a Wes Anderson inspired color grade. Apply flat, even lighting with a storybook pastel palette of warm butter yellows, dusty pinks, and mint accents, low contrast, and a meticulous symmetrical whimsical mood, ${PRESERVE}` },
                { id: 'epic-hdr', name: 'Epic Drama HDR', prompt: `Transform this image into an epic dramatic HDR cinematic still. Expand the dynamic range with luminous detailed highlights and deep readable shadows, add bold theatrical contrast, rich saturated yet natural colors, and a grand sweeping movie-poster atmosphere, ${PRESERVE}` },
                { id: 'western-dusty', name: 'Western Dusty', prompt: `Transform this image with a classic western film color grade. Wash the scene in dusty sunbaked amber and tan, fade the blues toward worn denim, add dry heat haze, gritty warm texture, and hard afternoon desert sunlight, ${PRESERVE}` },
                { id: 'horror-desat', name: 'Horror Desaturated', prompt: `Transform this image with an unsettling horror-movie color grade. Drain the saturation toward a sickly green-gray palette, add cold clammy shadows, a heavy dark vignette, and a tense oppressive atmosphere with dim uneasy light, ${PRESERVE}` },
                { id: 'kodak-cinema', name: 'Kodak Vision3 Cinema', prompt: `Apply a premium cinematic film-emulation color grade inspired by Kodak Vision3 25OD and Kodak 2383 print film with Leica-inspired color science. Grade toward deep emerald greens, muted earthy tones, and teal shadows with warm golden highlights, natural skin tones, gently desaturated blues, and rich color separation. Use low-contrast cinematic lighting with soft highlight roll-off, controlled dynamic range, warm highlights against cool shadows, natural light wrapping, and delicate bloom for a moody, dramatic, award-winning film look, ${PRESERVE}` },
                { id: 'fuji-cinema', name: 'Fujifilm Cinematic', prompt: `Apply a natural cinematic film-grade color transformation using color, light, and atmosphere adjustments only. Create a soft dreamy tonal haze with a subtle volumetric god-ray light quality, delicate bloom, warm golden highlights, and cool desaturated shadows. Emulate Fujifilm X-Series color science blending Classic Chrome and nostalgic negative film: soft warm highlights, slightly cool shadows, muted yet rich filmic colors, natural skin tones, gentle color separation, subtle cyan-blue tones in bright areas, and earthy tones with medium-low saturation and refined natural contrast, ${PRESERVE}` },
                { id: 'dramatic-relight', name: 'Dramatic Relight', prompt: `Apply a clearly noticeable cinematic relight color grade. Make the image visibly darker and moodier than the original with deep rich shadows, dramatic tonal depth, and a premium cinematic atmosphere. Create a sharp, luminous, concentrated glow that builds strong contrast between dark shadow regions and illuminated focal points, with bold rim-light tones, glossy highlight transitions, stronger tonal separation between blacks, midtones, and glowing whites, and selective radiant bloom on focal details only, ${PRESERVE}` }
            ]},
            { id: 'forest', fa: 'fa-tree', presets: [
                { id: 'dense-fog', name: 'Dense Fog (Kabut Tebal)', prompt: `Transform this image into a breathtaking ultra-realistic foggy masterpiece. Cover the entire environment in dense, thick, layered natural white fog with drifting mist and strong atmospheric depth, creating a mysterious and cinematic atmosphere — the fog may be added generously and realistically throughout the scene. Apply rich forest-inspired color grading with deep emerald green, dark teal, moss green, and earthy brown tones, and introduce soft volumetric light rays subtly penetrating through the fog, creating depth and realism, with a moody woodland aesthetic and professional cinematic photography grading, like a premium DSLR photograph captured during a cold heavily misty morning. ${PRESERVE_FOG}` },
                { id: 'dense-warm-fog', name: 'Dense Warm Fog', prompt: `Transform this image into a breathtaking ultra-realistic warm foggy masterpiece. Cover the entire environment in dense, thick, natural warm golden fog with layered dreamy mist and strong atmospheric depth — the fog may be added generously and realistically throughout the scene. Apply rich warm color grading with deep emerald-yellow greens, dark teal, mossy grey, and earthy brown tones, and introduce soft golden volumetric light rays glowing through the fog, like a premium DSLR photograph captured during a warm heavily misty sunrise. ${PRESERVE_FOG}` },
                { id: 'foggy-forest', name: 'Foggy Forest', prompt: `Apply a breathtaking ultra-realistic foggy forest color grade to this image. Grade the whole scene with the atmosphere of a cold misty morning: a soft white hazy tonal quality, muted low-contrast distance, and rich forest-inspired color grading with deep emerald green, dark teal, moss green, and earthy brown tones. Give the existing light a soft, diffused, gently volumetric quality, with a moody woodland aesthetic, atmospheric perspective, and professional cinematic photography grading, like a premium DSLR photograph captured on a cold misty morning, ${PRESERVE}` },
                { id: 'enchanted-emerald', name: 'Enchanted Emerald', prompt: `Apply a glowing enchanted emerald color grade to this image. Saturate the existing greens toward luminous emerald and jade, give the existing light a soft fairy-tale glow, and deepen the shadows into rich mossy tones, ${PRESERVE}` },
                { id: 'rainforest', name: 'Tropical Rainforest', prompt: `Apply a lush tropical rainforest color grade. Deepen the existing greens to saturated jungle tones, give surfaces a wet rain-soaked tonal sheen, a humid soft diffused light quality, and rich dark earth tones full of life, ${PRESERVE}` },
                { id: 'autumn-amber', name: 'Autumn Amber Woods', prompt: `Apply a warm autumn woodland color grade. Shift the existing tones toward amber, rust, copper, and gold, with the warm low-light feel of an October afternoon and cozy earthy shadows, ${PRESERVE}` },
                { id: 'misty-pine', name: 'Misty Pine Morning', prompt: `Apply a cool misty pine forest color grade. Cool the palette toward blue-green conifer tones with a soft hazy morning tonal softness, muted cold light, and a quiet Nordic wilderness stillness, ${PRESERVE}` },
                { id: 'jungle-moss', name: 'Deep Jungle Moss', prompt: `Apply a deep jungle moss color grade. Sink the palette into dark verdant greens with a soft canopy-shade light quality, moss-rich texture tones, and shadowed emerald depths, ${PRESERVE}` },
                { id: 'warm-foggy-forest', name: 'Warm Foggy Forest', prompt: `Apply a warm foggy forest color grade. Give the scene a soft warm hazy tonal atmosphere with deep emerald-yellow greens, dark teal, mossy grey-green, and earthy brown tones, a gentle golden glow in the light, and a soft volumetric warmth, like a premium DSLR photograph on a warm misty morning, ${PRESERVE}` },
                { id: 'moody-rainforest', name: 'Moody Rainforest', prompt: `Apply a cinematic dark forest color grade with cool emerald green and deep teal tones. Deepen the foggy misty tonal atmosphere, lower the overall exposure slightly, reduce the highlights, and deepen the blacks while preserving shadow detail. Desaturate warm colors except for natural skin tones. Add soft matte contrast, a subtle blue-gray haze, rich forest greens, and muted earthy browns, with soft tonal diffusion, gentle vignetting, and a moody premium rainforest ambiance, ${PRESERVE}` }
            ]},
            { id: 'golden', fa: 'fa-sun', presets: [
                { id: 'golden-sunrise', name: 'Golden Sunrise', prompt: `Apply a soft golden sunrise color grade. Wash the existing light in gentle pink-gold dawn tones with a delicate warm tonal haze and a fresh hopeful early-morning glow, ${PRESERVE}` },
                { id: 'sunset-glow', name: 'Sunset Glow', prompt: `Apply a rich sunset glow color grade. Saturate the existing sky and light toward deep orange, coral, and magenta dusk tones, give the subject a warm glowing edge tone, and a serene end-of-day radiance, ${PRESERVE}` },
                { id: 'honey-tone', name: 'Honey Warm Tone', prompt: `Transform this image with an all-over warm honey amber grade. Coat highlights and midtones in golden honey warmth, keep the shadows soft and brown-sugar toned, and create an inviting sun-kissed atmosphere, ${PRESERVE}` },
                { id: 'amber-backlight', name: 'Amber Backlight', prompt: `Grade this image as if warmly backlit: glowing golden edge tones on the subject, a soft luminous amber warmth across the highlights, and a radiant warm tonal haze, ${PRESERVE}` },
                { id: 'desert-gold', name: 'Desert Gold', prompt: `Transform this image with a harsh golden desert grade. Apply hot sand-gold tones across the scene, strong dry sunlight with crisp shadows, shimmering heat atmosphere, and mineral warm texture, ${PRESERVE}` },
                { id: 'beach-evening', name: 'Warm Beach Evening', prompt: `Transform this image with a warm beach evening grade. Blend soft golden sand tones with gentle turquoise water hues, low warm sun glow, salt-air haze, and a relaxed tropical dusk mood, ${PRESERVE}` },
                { id: 'sunset-dream-haze', name: 'Sunset Dream Haze', prompt: `Apply a dreamy sunset color grade with a soft cinematic dream-haze diffusion. Warm the light with soft yellow, orange, and pink sunset tones, add vibrant pastel color tints, a gentle hopeful dreamlike glow, and a Fujifilm analog film tonal finish, ${PRESERVE}` }
            ]},
            { id: 'moody', fa: 'fa-moon', presets: [
                { id: 'dark-matte', name: 'Dark Moody Matte', prompt: `Transform this image with a dark moody matte grade. Lift the blacks into soft matte charcoal, mute the colors toward deep muted earth tones, lower the highlights, and create a quiet brooding editorial atmosphere, ${PRESERVE}` },
                { id: 'midnight-blue', name: 'Midnight Blue', prompt: `Transform this image with a midnight blue color grade. Push the shadows into deep navy and indigo, keep highlights cool and moonlit, and wrap the scene in a still, nocturnal blue darkness, ${PRESERVE}` },
                { id: 'rainy-blues', name: 'Rainy Blues', prompt: `Transform this image with a melancholic rainy-day grade. Apply cool desaturated blues and grays, soft overcast light, wet reflective surfaces, and a quiet introspective drizzle mood, ${PRESERVE}` },
                { id: 'smoky-shadow', name: 'Smoky Shadow', prompt: `Apply a smoky low-key color grade. Deep soft shadows with a hazy smoky tonal quality, a dim directional light feel, muted shadowy neutrals, and a mysterious dusky atmosphere, ${PRESERVE}` },
                { id: 'charcoal-fade', name: 'Charcoal Fade', prompt: `Transform this image with a near-monochrome charcoal grade. Fade the colors until only faint traces remain over deep charcoal grays, soft muted contrast, and a somber cinematic stillness, ${PRESERVE}` },
                { id: 'forest-noir', name: 'Deep Forest Noir', prompt: `Transform this image with a dark woodland noir grade. Sink the greens into black-green shadow tones, add cold dim light filtering through darkness, and create an ominous deep-forest night atmosphere, ${PRESERVE}` },
                { id: 'emerald-noir', name: 'Emerald Noir', prompt: `Transform this image with a luxurious emerald noir grade. Blend deep teal-emerald shadows with soft golden accent highlights, rich dark elegance, and a moody upscale cinematic feel, ${PRESERVE}` },
                { id: 'twilight-spectrum', name: 'After-Rain Twilight', prompt: `Apply a rare after-rain twilight color grade. Blend deep cobalt blue, rich sapphire, soft periwinkle, and muted violet tones with a cool lavender haze and moonlit cyan shadows, and let a subtle champagne-peach glow warm the lowest highlights near the horizon. Keep the transitions seamless and scientifically believable with ultra-soft optical bloom only around existing bright areas, gentle atmospheric tonal diffusion, premium shadow separation, and smooth highlight roll-off, ${PRESERVE}` },
                { id: 'moody-green-cinema', name: 'Moody Green Cinema', prompt: `Apply a moody green cinematic color grade inspired by Wong Kar-wai cinematography and subtle Kodak Portra 400 film tones. Grade toward muted melancholic greens with gentle contrast and realistic film colors, and add a soft golden sunset backlight tonal warmth blending into the cool green environment without overpowering it. Keep a poetic, serene, editorial mood with natural skin tones and soft cinematic bloom, ${PRESERVE}` }
            ]},
            { id: 'vintage', fa: 'fa-camera-retro', presets: [
                { id: 'kodak-portra', name: 'Kodak Portra', prompt: `Transform this image to emulate Kodak Portra film. Apply creamy natural skin tones, soft warm neutrals, gentle pastel saturation, fine subtle grain, and the timeless flattering warmth of professional portrait film, ${PRESERVE}` },
                { id: 'fuji-velvia', name: 'Fuji Velvia', prompt: `Transform this image to emulate Fuji Velvia slide film. Punch up the saturation with vivid deep greens, bold blues, and rich reds, crisp contrast, and the dramatic landscape-film look photographers love, ${PRESERVE}` },
                { id: 'cinestill-night', name: 'Cinestill Night', prompt: `Transform this image to emulate CineStill 800T at night. Add glowing red-orange halation around bright lights, tungsten warm-cool balance, soft film grain, and a dreamy nocturnal analog cinema feel, ${PRESERVE}` },
                { id: 'vhs-retro', name: 'VHS Retro', prompt: `Transform this image with a nostalgic VHS retro grade. Soften the focus slightly, add gentle chroma bleed and muted analog color, faint scanline texture feel, and a warm fuzzy 90s home-video atmosphere, ${PRESERVE}` },
                { id: 'polaroid-soft', name: 'Polaroid Soft', prompt: `Transform this image with a soft Polaroid instant-film grade. Wash the whites into a dreamy pale glow, mute the colors gently, lower the contrast, and add the tender faded charm of an instant photo, ${PRESERVE}` },
                { id: 'faded-70s', name: '70s Faded', prompt: `Transform this image with a faded 1970s film grade. Yellow the highlights softly, fade the blacks, mute the palette toward warm nostalgic ochres and olive tones, and add a sun-bleached vintage softness, ${PRESERVE}` },
                { id: 'sepia-classic', name: 'Sepia Classic', prompt: `Transform this image into a rich classic sepia photograph. Convert the palette to warm brown monotone with deep chocolate shadows and cream highlights, gentle aged softness, and a timeless heritage feel, ${PRESERVE}` },
                { id: 'kodachrome-64', name: 'Kodachrome 64', prompt: `Transform this image to emulate Kodachrome 64. Apply honest mid-century color with deep confident reds, warm accurate skin, restrained blues, crisp micro-contrast, and the documentary richness of classic slide film, ${PRESERVE}` }
            ]},
            { id: 'urban', fa: 'fa-city', presets: [
                { id: 'cyberpunk-neon', name: 'Cyberpunk Neon', prompt: `Apply a cyberpunk neon color grade. Electric magenta and cyan tones over deep black-blue shadows, glowing highlight accents, and a futuristic night-city mood, ${PRESERVE}` },
                { id: 'tokyo-night', name: 'Tokyo Street Night', prompt: `Apply a Tokyo night street color grade. Warm neon-sign glow tones mixed with teal-pink highlight tints, a soft night-haze tonal quality, and an electric metropolitan energy, ${PRESERVE}` },
                { id: 'neon-noir', name: 'Neon Noir', prompt: `Transform this image with a neon noir grade. Keep the scene in deep cinematic darkness pierced by a single vivid neon accent color, hard shadows, moody rim light, and a stylish crime-thriller atmosphere, ${PRESERVE}` },
                { id: 'city-teal', name: 'City Teal Glow', prompt: `Transform this image with a clean modern city grade. Cool the glass and concrete toward polished teal, balance warm interior lights against blue-hour sky, and create a sleek contemporary urban look, ${PRESERVE}` },
                { id: 'hongkong-haze', name: 'Hong Kong Haze', prompt: `Apply a humid Hong Kong haze color grade. Blend warm green-yellow glow tones with a dense atmospheric tonal softness, layered cinematic depth, and a nostalgic Asian metropolis mood, ${PRESERVE}` },
                { id: 'sodium-street', name: 'Streetlight Sodium', prompt: `Transform this image with an orange sodium streetlight grade. Bathe the night scene in monochromatic amber lamplight, deep brown shadows, soft pooled light, and a lonely late-night street atmosphere, ${PRESERVE}` },
                { id: 'rainy-neon', name: 'Rainy Neon Reflections', prompt: `Apply a rainy neon color grade. Cool blue night base tones with vivid neon color accents and a wet, glossy reflective tonal feel across dark surfaces, ${PRESERVE}` }
            ]},
            { id: 'aesthetic', fa: 'fa-wand-magic-sparkles', presets: [
                { id: 'korean-soft', name: 'Korean Soft Tone', prompt: `Transform this image with a bright Korean soft tone grade. Lift the exposure into airy brightness, apply soft pastel skin tones, gentle low contrast, creamy whites, and a fresh dreamy K-aesthetic cleanliness, ${PRESERVE}` },
                { id: 'ig-clean', name: 'IG Clean Bright', prompt: `Transform this image with a clean bright social-media grade. Brighten the whites crisply, add a gentle saturation boost, balanced fresh tones, subtle clarity, and an effortlessly polished feed-ready look, ${PRESERVE}` },
                { id: 'pastel-cream', name: 'Soft Pastel Cream', prompt: `Transform this image with a soft pastel cream grade. Wash the palette in cream, blush, and pale butter tones, soften the light into a gentle glow, and create a tender airy pastel atmosphere, ${PRESERVE}` },
                { id: 'airy-minimal', name: 'Airy White Minimal', prompt: `Transform this image with a high-key airy minimal grade. Push the scene toward luminous clean whites, feather-soft shadows, restrained neutral tones, and a calm gallery-like minimalist brightness, ${PRESERVE}` },
                { id: 'natural-skin', name: 'Natural Skin Tone', prompt: `Transform this image with a true-to-life natural grade. Perfect the skin tones to accurate healthy warmth, balance the whites cleanly, keep colors honest and flattering, with soft professional portrait light, ${PRESERVE}` },
                { id: 'cafe-tone', name: 'Cafe Aesthetic', prompt: `Transform this image with a cozy cafe aesthetic grade. Warm the palette toward latte browns and caramel light, soft window-light glow, muted comfortable tones, and an intimate coffee-shop warmth, ${PRESERVE}` },
                { id: 'cream-beige', name: 'Cream Beige Editorial', prompt: `Transform this image with a muted beige editorial grade. Desaturate gently toward warm greige and sand tones, soft diffused light, quiet elegant contrast, and a high-fashion magazine calmness, ${PRESERVE}` }
            ]},
            { id: 'bw', fa: 'fa-circle-half-stroke', presets: [
                { id: 'classic-mono', name: 'Classic Monochrome', prompt: `Transform this image into a balanced classic black and white photograph. Apply rich silver-gelatin tonality with detailed midtones, deep but open shadows, luminous highlights, and timeless monochrome elegance, ${PRESERVE}` },
                { id: 'high-contrast-bw', name: 'High Contrast B&W', prompt: `Transform this image into a punchy high-contrast black and white. Drive the blacks deep and the whites bright, carve out bold graphic shapes with hard tonal separation and striking dramatic impact, ${PRESERVE}` },
                { id: 'soft-gray', name: 'Soft Gray Film', prompt: `Transform this image into a low-contrast gray film black and white. Compress the tones into gentle silvery grays, soft delicate light, fine grain, and a quiet contemplative analog softness, ${PRESERVE}` },
                { id: 'dramatic-portrait-bw', name: 'Dramatic Portrait B&W', prompt: `Transform this image into a chiaroscuro black and white portrait style. Sculpt the subject with strong directional light against deep darkness, rich skin texture detail, and intense classical drama, ${PRESERVE}` },
                { id: 'street-doc', name: 'Street Documentary', prompt: `Transform this image into a gritty documentary street black and white. Add pronounced film grain, raw honest contrast, textured urban tonality, and the candid energy of classic reportage photography, ${PRESERVE}` }
            ]},
            { id: 'weather', fa: 'fa-cloud-rain', presets: [
                { id: 'misty-morning', name: 'Misty Morning', prompt: `Apply a soft misty morning color grade. Cool fresh tones with a gentle white hazy tonal softness, diffused pale light, a dew-soft atmosphere, and tranquil early-morning quietness, ${PRESERVE}` },
                { id: 'rainy-mood', name: 'Rainy Day Mood', prompt: `Apply an overcast rainy-day color grade. Muted cool gray-blue palette, soft diffused cloud light, a gentle glistening tonal sheen on existing surfaces, and a cozy melancholic rain mood, ${PRESERVE}` },
                { id: 'winter-snow', name: 'Winter Snow Cool', prompt: `Apply a cool winter color grade. Shift the light toward crisp white-blue snow tones with frosty clarity, soft cold shadows, a gentle wintry tonal haze, and serene stillness, ${PRESERVE}` },
                { id: 'spring-fresh', name: 'Spring Fresh Bloom', prompt: `Apply a fresh spring bloom color grade. Brighten toward tender greens and soft pink accent tints, clear gentle sunlight tones, dewy freshness, and an optimistic new-season vitality, ${PRESERVE}` },
                { id: 'stormy-drama', name: 'Stormy Sky Drama', prompt: `Apply a dramatic stormy color grade. Push the existing sky and light toward deep slate and steel tones with brooding pre-storm contrast and powerful atmospheric tension, ${PRESERVE}` },
                { id: 'overcast-soft', name: 'Overcast Soft', prompt: `Transform this image with an even overcast grade. Wrap the scene in soft shadowless cloud light, calm neutral tones with gentle depth, low quiet contrast, and a peaceful muted-day softness, ${PRESERVE}` }
            ]},
            { id: 'travel', fa: 'fa-earth-asia', presets: [
                { id: 'tropical-vibrant', name: 'Tropical Vibrant', prompt: `Transform this image with a vibrant tropical grade. Saturate toward turquoise water, lime palms, and sun-bright color, crisp holiday light, and an energetic paradise-postcard vividness, ${PRESERVE}` },
                { id: 'ocean-teal', name: 'Ocean Teal', prompt: `Transform this image with a deep ocean teal grade. Push the waters and shadows toward rich marine teal, keep foam and highlights clean white, add sea-air clarity and a refreshing coastal depth, ${PRESERVE}` },
                { id: 'nordic-cold', name: 'Nordic Cold', prompt: `Transform this image with an icy Nordic grade. Cool the palette to pale glacial blues and clean grays, minimal muted tones, thin crisp northern light, and a stark beautiful Scandinavian calm, ${PRESERVE}` },
                { id: 'bali-jungle', name: 'Bali Jungle', prompt: `Transform this image with a lush Bali jungle grade. Warm the greens into tropical richness, add golden humid light filtering through palms, earthy volcanic tones, and an exotic island-retreat serenity, ${PRESERVE}` },
                { id: 'alpine-crisp', name: 'Alpine Crisp', prompt: `Transform this image with a crisp alpine grade. Apply thin-air mountain clarity, cool clean blues and stone grays with bright snow accents, sharp fresh light, and an invigorating high-altitude purity, ${PRESERVE}` },
                { id: 'safari-warm', name: 'Safari Warm', prompt: `Transform this image with a dry savanna safari grade. Wash the scene in golden grass tones, dusty warm earth, low amber sun, soft heat haze, and a wild expansive African-plain atmosphere, ${PRESERVE}` },
                { id: 'santorini', name: 'Santorini Blue White', prompt: `Transform this image with a Mediterranean Santorini grade. Brighten the whites to sunlit purity against vivid Aegean blue accents, clear coastal light, warm stone touches, and a breezy island freshness, ${PRESERVE}` }
            ]},
            { id: 'food', fa: 'fa-utensils', presets: [
                { id: 'warm-appetizing', name: 'Warm Appetizing', prompt: `Transform this image with a warm appetizing food grade. Enrich the reds, oranges, and golden browns, add a soft delicious glow, gentle steam-warm atmosphere, and mouth-watering inviting tones, ${PRESERVE}` },
                { id: 'bright-commercial', name: 'Bright Commercial', prompt: `Transform this image with a clean bright commercial product grade. Apply crisp studio-white light, accurate vivid product color, polished clean shadows, and a professional advertising freshness, ${PRESERVE}` },
                { id: 'dark-rustic', name: 'Dark Rustic Food', prompt: `Transform this image with a dark rustic food grade. Set the scene in moody low-key light over dark wood tones, rich deep shadows, warm candle-like highlights on textures, and an artisanal restaurant drama, ${PRESERVE}` },
                { id: 'fresh-vivid', name: 'Fresh Vivid Product', prompt: `Transform this image with a fresh vivid grade. Boost crisp natural saturation, cool clean brightness, dewy fresh texture detail, and an energetic healthy market-fresh appeal, ${PRESERVE}` },
                { id: 'golden-crispy', name: 'Golden Crispy Warm', prompt: `Transform this image with a golden crispy food grade. Deepen the fried golden-brown tones, add sizzling warm light, crunchy texture emphasis, and an irresistible comfort-food warmth, ${PRESERVE}` }
            ]},
            { id: 'custom', fa: 'fa-pen-ruler', presets: [] }
        ];

        // === HELPERS ===
        const toastEl = document.getElementById('toast');
        let toastTimer = null;
        function showToast(msg) {
            toastEl.textContent = msg;
            toastEl.classList.add('show');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => toastEl.classList.remove('show'), 4000);
        }

        async function fileToBase64Compressed(file) {
            if (file.type === 'image/heic' || /\.heic$/i.test(file.name)) {
                file = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.9 });
                if (Array.isArray(file)) file = file[0];
            }
            if (!(file instanceof Blob) || (file.type && !/^image\//.test(file.type))) throw new Error('not-image');
            const dataUrl = await new Promise((res, rej) => {
                const r = new FileReader();
                r.onload = e => res(e.target.result);
                r.onerror = () => rej(new Error('not-image'));
                r.readAsDataURL(file);
            });
            const img = await new Promise((res, rej) => {
                const i = new Image();
                i.onload = () => res(i);
                i.onerror = () => rej(new Error('not-image'));
                i.src = dataUrl;
            });
            const MAX = 1024;
            let w = img.width, h = img.height;
            if (w > MAX || h > MAX) {
                if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
                else { w = Math.round(w * MAX / h); h = MAX; }
            }
            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            return canvas.toDataURL('image/jpeg', 0.85).split(',')[1];
        }

        window.downloadDataURI = async function(dataUri, filename) {
            const blob = await (await fetch(dataUri)).blob();
            saveAs(blob, filename);
        };
        document.addEventListener('click', async (e) => {
            const btn = e.target.closest('[data-action="download"]');
            if (!btn) return;
            e.preventDefault();
            await window.downloadDataURI(`data:image/png;base64,${btn.dataset.base64}`, btn.dataset.filename);
        }, true);

        const previewModal = document.getElementById('preview-modal');
        const previewImg = document.getElementById('preview-img');
        const previewDownload = document.getElementById('preview-download');
        function openPreview(b64, filename) {
            previewImg.src = `data:image/png;base64,${b64}`;
            previewDownload.dataset.base64 = b64;
            previewDownload.dataset.filename = filename;
            previewModal.classList.remove('hidden');
        }
        function closePreview() {
            previewModal.classList.add('hidden');
            previewImg.src = '';
        }
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-action="preview"]');
            if (!btn) return;
            e.preventDefault();
            openPreview(btn.dataset.base64, btn.dataset.filename);
        }, true);
        document.getElementById('preview-close').addEventListener('click', closePreview);
        previewModal.addEventListener('click', (e) => { if (e.target === previewModal) closePreview(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePreview(); });

        // === BUILDERS ===
        const RATIOS = ['1:1', '3:4', '4:3', '4:5', '5:4', '2:3', '3:2', '9:16', '16:9', '21:9'];

        function buildSidebar() {
            const nav = document.getElementById('sidebar-nav');
            CATEGORIES.forEach(cat => {
                const btn = document.createElement('button');
                btn.dataset.tab = cat.id;
                btn.className = 'main-tab-btn';
                btn.innerHTML = `<i class="fas ${cat.fa}"></i><span data-i18n="cat.${cat.id}.name"></span>`;
                nav.appendChild(btn);
            });
        }

        function buildMobileNav() {
            const nav = document.getElementById('mobile-nav');
            let htmlStr = `<button data-tab="beranda" class="active"><i class="fas fa-house"></i><span data-i18n="nav.home"></span></button>`;
            CATEGORIES.slice(0, 3).forEach(cat => {
                htmlStr += `<button data-tab="${cat.id}"><i class="fas ${cat.fa}"></i><span data-i18n="cat.${cat.id}.name"></span></button>`;
            });
            htmlStr += `<button id="mobile-more"><i class="fas fa-bars"></i><span>Menu</span></button>`;
            nav.innerHTML = htmlStr;
            document.getElementById('mobile-more').addEventListener('click', () => {
                sidebar.classList.add('open');
                toggleBtn.classList.add('sidebar-open');
            });
        }

        function buildPanels() {
            const main = document.getElementById('main-panels');
            CATEGORIES.forEach(cat => {
                const isCustom = cat.id === 'custom';
                const stepHead = (num, key) => `<div class="flex items-center gap-2 mb-4"><div class="step-num">${num}</div><h2 class="text-lg font-bold" data-i18n="${key}"></h2></div>`;
                const modeSection = `
                    <div class="card p-5">
                        ${stepHead(2, 'wiz.step-mode')}
                        <div id="${cat.id}-mode-grid" class="space-y-2">
                            <button type="button" class="preset-btn selected" data-mode="grading">
                                <span class="font-bold block"><i class="fas fa-palette mr-2"></i><span data-i18n="mode.grading"></span></span>
                                <span class="text-xs opacity-80" data-i18n="mode.grading-desc"></span>
                            </button>
                            <button type="button" class="preset-btn" data-mode="editor">
                                <span class="font-bold block"><i class="fas fa-wand-magic-sparkles mr-2"></i><span data-i18n="mode.editor"></span></span>
                                <span class="text-xs opacity-80" data-i18n="mode.editor-desc"></span>
                            </button>
                        </div>
                    </div>`;
                const presetSection = isCustom ? '' : `
                    <div class="card p-5">
                        ${stepHead(3, 'wiz.step2')}
                        <div id="${cat.id}-preset-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            ${cat.presets.map((p, i) => `<button type="button" class="preset-btn${i === 0 ? ' selected' : ''}" data-preset="${p.id}">${p.name}</button>`).join('')}
                        </div>
                        <div class="mt-4">
                            <p class="text-sm font-semibold mb-2" style="color:var(--muted)" data-i18n="wiz.custom-label"></p>
                            <textarea id="${cat.id}-custom-input" rows="2" data-i18n-placeholder="wiz.custom-placeholder"></textarea>
                        </div>
                    </div>`;
                const customSection = !isCustom ? '' : `
                    <div class="card p-5">
                        ${stepHead(3, 'wiz.step2')}
                        <textarea id="${cat.id}-custom-input" rows="5" data-i18n-placeholder="wiz.custom-required"></textarea>
                    </div>`;
                const panel = document.createElement('div');
                panel.id = `content-${cat.id}`;
                panel.className = 'main-content-panel hidden';
                panel.innerHTML = `
                <div class="mb-5">
                    <h2 class="text-xl sm:text-2xl font-extrabold"><i class="fas ${cat.fa} accent-text mr-2"></i><span data-i18n="cat.${cat.id}.name"></span></h2>
                    <p class="text-sm mt-1" style="color:var(--muted)" data-i18n="cat.${cat.id}.desc"></p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div class="space-y-5">
                        <div class="card p-5">
                            ${stepHead(1, 'wiz.step1')}
                            <div id="${cat.id}-dropzone" class="dropzone">
                                <div id="${cat.id}-upload-empty">
                                    <i class="fas fa-cloud-arrow-up text-3xl mb-2 accent-text"></i>
                                    <p class="text-sm font-medium" data-i18n="wiz.upload-hint"></p>
                                    <p class="text-xs mt-1" style="color:var(--muted)" data-i18n="wiz.upload-formats"></p>
                                </div>
                                <div id="${cat.id}-upload-preview" class="hidden">
                                    <img id="${cat.id}-preview-img" class="rounded-lg max-h-48 mx-auto" alt="">
                                    <p class="text-xs mt-2 accent-text font-semibold" data-i18n="wiz.change-photo"></p>
                                </div>
                            </div>
                            <input type="file" id="${cat.id}-upload-input" accept="image/*,.heic" class="hidden">
                        </div>
                        ${modeSection}${presetSection}${customSection}
                        <div class="card p-5">
                            ${stepHead(4, 'wiz.step3')}
                            <div id="${cat.id}-intensity-grid" class="grid grid-cols-2 gap-2">
                                <button type="button" class="opt-btn" data-intensity="subtle" data-i18n="int.subtle"></button>
                                <button type="button" class="opt-btn selected" data-intensity="medium" data-i18n="int.medium"></button>
                                <button type="button" class="opt-btn" data-intensity="strong" data-i18n="int.strong"></button>
                                <button type="button" class="opt-btn" data-intensity="max" data-i18n="int.max"></button>
                            </div>
                        </div>
                        <div class="card p-5">
                            ${stepHead(5, 'wiz.step4')}
                            <div id="${cat.id}-ratio-grid" class="grid grid-cols-2 gap-2">
                                ${RATIOS.map(r => `<button type="button" class="opt-btn${r === '3:4' ? ' selected' : ''}" data-ratio="${r}"><span class="ratio-icon" style="aspect-ratio:${r.replace(':', '/')}"></span>${r} <span data-i18n="ratio.${r}"></span></button>`).join('')}
                            </div>
                        </div>
                        <div class="card p-5">
                            ${stepHead(6, 'wiz.step5')}
                            <div id="${cat.id}-count-grid" class="count-btn-grid">
                                ${Array.from({ length: 10 }, (_, i) => `<button type="button"${i === 3 ? ' class="selected"' : ''} data-count="${i + 1}">${i + 1}</button>`).join('')}
                            </div>
                        </div>
                        <button type="button" id="${cat.id}-generate-btn" class="btn-generate" disabled><i class="fas fa-bolt"></i><span data-i18n="wiz.generate"></span></button>
                        <button type="button" id="${cat.id}-stop-btn" class="btn-stop hidden"><i class="fas fa-stop-circle"></i><span data-i18n="wiz.stop"></span></button>
                    </div>
                    <div class="lg:col-span-2">
                        <div class="card p-5">
                            <div class="flex items-center justify-between mb-4 gap-2">
                                <h3 class="text-lg font-bold"><i class="fas fa-images accent-text mr-2"></i><span data-i18n="wiz.results"></span></h3>
                                <button id="${cat.id}-download-all-btn" class="download-btn hidden"><i class="fas fa-download"></i><span data-i18n="wiz.download-all"></span></button>
                            </div>
                            <div id="${cat.id}-results-grid" class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                <div class="col-span-2 sm:col-span-3 text-center py-14" style="color:var(--muted)">
                                    <i class="fas fa-wand-magic-sparkles text-5xl mb-3 opacity-40"></i>
                                    <p data-i18n="wiz.empty"></p>
                                    <p class="text-xs mt-1" data-i18n="wiz.empty-hint"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
                main.appendChild(panel);
            });
        }

        // === ENGINE ===
        const apiKey = "";
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image-preview:generateContent?key=${apiKey}`;
        const SAFETY = [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
        ];

        function buildPrompt(cat, state) {
            const custom = document.getElementById(`${cat.id}-custom-input`).value.trim();
            const isEditor = state.mode === 'editor';
            if (cat.id === 'custom') {
                if (!custom) return null;
                return isEditor ? `${custom}. ${PRESERVE_EDITOR}` : `${custom}, ${PRESERVE}`;
            }
            const preset = cat.presets.find(p => p.id === state.presetId);
            let p = INTENSITY[state.intensity] + preset.prompt;
            if (isEditor) {
                p = EDITOR_TRANSFORM + p.split(PRESERVE).join(PRESERVE_EDITOR).split(PRESERVE_FOG).join(PRESERVE_EDITOR);
            }
            if (custom) p += ` Additional instruction: ${custom}.`;
            return p;
        }

        async function generateSingle(cat, state, index, prompt) {
            const card = document.getElementById(`${cat.id}-card-${index}`);
            try {
                const payload = {
                    contents: [{ parts: [{ text: prompt }, { inlineData: { mimeType: "image/jpeg", data: state.base64 } }] }],
                    safetySettings: SAFETY,
                    generationConfig: { responseModalities: ['TEXT', 'IMAGE'], imageConfig: { aspectRatio: state.ratio } }
                };
                const response = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                const result = await response.json();
                const b64 = result?.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
                if (!b64) throw new Error('No image data');
                state.results[index - 1] = { base64: b64, filename: `canvla-${cat.id}-${state.presetId || 'custom'}-${index}.png` };
                if (card) {
                    const fname = state.results[index - 1].filename;
                    card.innerHTML = `<img src="data:image/png;base64,${b64}" data-action="preview" data-base64="${b64}" data-filename="${fname}" class="result-img rounded-lg w-full h-auto object-cover" style="aspect-ratio:${state.ratio.replace(':', '/')}" alt="">` +
                        `<div class="flex items-center justify-center gap-2 mt-2">` +
                        `<button data-action="preview" data-base64="${b64}" data-filename="${fname}" class="preview-btn" title="${t('wiz.preview')}"><i class="fas fa-eye"></i></button>` +
                        `<button data-action="download" data-base64="${b64}" data-filename="${fname}" class="download-btn"><i class="fas fa-download"></i></button>` +
                        `</div>`;
                }
            } catch (err) {
                console.error(`${cat.id} #${index}:`, err);
                if (card) card.innerHTML = '';
            }
        }

        async function runGeneration(cat, state, $) {
            if (!state.base64) { showToast(t('wiz.err-upload')); return; }
            const prompt = buildPrompt(cat, state);
            if (!prompt) { showToast(t('wiz.err-custom')); return; }
            state.stopped = false;
            state.results = [];
            const genBtn = $('generate-btn'), stopBtn = $('stop-btn'), grid = $('results-grid');
            genBtn.classList.add('hidden');
            stopBtn.classList.remove('hidden');
            $('download-all-btn').classList.add('hidden');
            let attempts = 0, success = 0;
            while (attempts < 3 && success === 0 && !state.stopped) {
                attempts++;
                grid.innerHTML = '';
                for (let i = 1; i <= state.count; i++) {
                    const card = document.createElement('div');
                    card.id = `${cat.id}-card-${i}`;
                    card.innerHTML = `<div class="w-full rounded-lg flex items-center justify-center" style="aspect-ratio:${state.ratio.replace(':', '/')};background:var(--panel-2)"><i class="fas fa-circle-notch spin text-2xl accent-text"></i></div>`;
                    grid.appendChild(card);
                }
                await Promise.allSettled(
                    Array.from({ length: state.count }, (_, i) => generateSingle(cat, state, i + 1, prompt))
                );
                grid.querySelectorAll(`[id^="${cat.id}-card-"]`).forEach(c => { if (!c.querySelector('img')) c.remove(); });
                success = state.results.filter(Boolean).length;
            }
            genBtn.classList.remove('hidden');
            stopBtn.classList.add('hidden');
            if (success === 0) {
                showToast(t('wiz.err-quota'));
                grid.innerHTML = `<div class="col-span-2 sm:col-span-3 text-center py-14" style="color:var(--muted)"><i class="fas fa-triangle-exclamation text-4xl mb-3 opacity-40"></i><p>${t('wiz.err-quota')}</p></div>`;
            } else {
                $('download-all-btn').classList.remove('hidden');
            }
        }

        function initCategory(cat) {
            const $ = (suffix) => document.getElementById(`${cat.id}-${suffix}`);
            const state = { base64: null, presetId: cat.presets[0] ? cat.presets[0].id : null, mode: 'grading', intensity: 'medium', ratio: '3:4', count: 4, results: [], stopped: false };

            const dropzone = $('dropzone'), input = $('upload-input');
            dropzone.addEventListener('click', () => input.click());
            dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('dragover'); });
            dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
            dropzone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropzone.classList.remove('dragover');
                if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
            });
            input.addEventListener('change', (e) => { if (e.target.files[0]) handleFile(e.target.files[0]); });
            async function handleFile(file) {
                try {
                    state.base64 = await fileToBase64Compressed(file);
                    $('preview-img').src = `data:image/jpeg;base64,${state.base64}`;
                    $('upload-empty').classList.add('hidden');
                    $('upload-preview').classList.remove('hidden');
                    $('generate-btn').disabled = false;
                } catch {
                    showToast(t('wiz.err-file'));
                }
            }

            const bindGroup = (gridId, attr, apply) => {
                const el = $(gridId);
                if (!el) return;
                el.addEventListener('click', (e) => {
                    const b = e.target.closest(`[data-${attr}]`);
                    if (!b) return;
                    apply(b.dataset[attr]);
                    el.querySelectorAll(`[data-${attr}]`).forEach(x => x.classList.toggle('selected', x === b));
                });
            };
            bindGroup('mode-grid', 'mode', v => { state.mode = v; });
            bindGroup('preset-grid', 'preset', v => { state.presetId = v; });
            bindGroup('intensity-grid', 'intensity', v => { state.intensity = v; });
            bindGroup('ratio-grid', 'ratio', v => { state.ratio = v; });
            bindGroup('count-grid', 'count', v => { state.count = Number(v); });

            $('generate-btn').addEventListener('click', () => runGeneration(cat, state, $));
            $('stop-btn').addEventListener('click', () => { state.stopped = true; });
            $('download-all-btn').addEventListener('click', async () => {
                const items = state.results.filter(Boolean);
                for (const item of items) {
                    await window.downloadDataURI(`data:image/png;base64,${item.base64}`, item.filename);
                    await new Promise(r => setTimeout(r, 300));
                }
            });
        }

        // === TABS ===
        const sidebar = document.getElementById('sidebar');
        const toggleBtn = document.getElementById('toggle-sidebar');
        const isMobile = () => window.innerWidth < 1024;
        function switchTab(tab) {
            document.querySelectorAll('.main-content-panel').forEach(p => p.classList.add('hidden'));
            const panel = document.getElementById(`content-${tab}`);
            if (panel) panel.classList.remove('hidden');
            document.querySelectorAll('[data-tab]').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
            if (isMobile()) { sidebar.classList.remove('open'); toggleBtn.classList.remove('sidebar-open'); }
            window.scrollTo({ top: 0 });
        }
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-tab]');
            if (btn) switchTab(btn.dataset.tab);
        });
        toggleBtn.addEventListener('click', () => {
            if (isMobile()) {
                sidebar.classList.toggle('open');
                toggleBtn.classList.toggle('sidebar-open', sidebar.classList.contains('open'));
            } else {
                sidebar.classList.toggle('collapsed');
                document.getElementById('main-panels').classList.toggle('expanded', sidebar.classList.contains('collapsed'));
                toggleBtn.classList.toggle('collapsed', sidebar.classList.contains('collapsed'));
            }
        });

        // === LOGIN SYSTEM ===
        const LOGIN_CFG = {
            SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzgOFqBMpZXzBjn-fuiViFAetcMy7Ez_68VGIGlNRa9AauPQ5NF9CxlStfiAvn75qwm/exec",
            APP_SECRET: "u4i29FqSI1XhepLQngYvETKl0bzD",
            PRODUCT_ID: "canvla-ai",
            BUY_LYNK_URL: "https://lynk.id/arullagi/65dnr5oqwdok",
            BUY_MAYAR_URL: "YOUR-MAYAR-URL"
        };
        (function() {
            const overlay = document.getElementById('login-overlay');
            const emailInput = document.getElementById('login-email');
            const loginBtn = document.getElementById('login-btn');
            const errEl = document.getElementById('login-error');
            const loadingEl = document.getElementById('login-loading');
            const badge = document.getElementById('user-badge');
            let sesInterval = null;

            let deviceToken = localStorage.getItem('canvla_device');
            if (!deviceToken) {
                deviceToken = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now());
                localStorage.setItem('canvla_device', deviceToken);
            }

            const api = (action, email) => fetch(
                `${LOGIN_CFG.SCRIPT_URL}?action=${action}&email=${encodeURIComponent(email)}&token=${encodeURIComponent(deviceToken)}&app_secret=${encodeURIComponent(LOGIN_CFG.APP_SECRET)}&product=${LOGIN_CFG.PRODUCT_ID}`
            ).then(r => r.json());

            function showError(msg) {
                errEl.textContent = msg;
                errEl.classList.remove('hidden');
            }
            function setLoading(on) {
                loadingEl.classList.toggle('hidden', !on);
                loginBtn.disabled = on;
            }
            function clearSession() {
                localStorage.removeItem('canvla_email');
                localStorage.removeItem('canvla_name');
            }
            function openApp(nama) {
                overlay.classList.add('hidden');
                badge.classList.add('active');
                document.getElementById('user-name').textContent = nama;
                if (!sesInterval) sesInterval = setInterval(jagaSesi, 10000);
            }
            async function jagaSesi() {
                const email = localStorage.getItem('canvla_email');
                if (!email) return;
                try {
                    const d = await api('cek', email);
                    if (d.status === 'INVALID') {
                        clearInterval(sesInterval);
                        alert(t('login.session-ended'));
                        clearSession();
                        location.reload();
                    }
                } catch (e) {}
            }

            loginBtn.addEventListener('click', async () => {
                errEl.classList.add('hidden');
                const email = emailInput.value.trim().toLowerCase();
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError(t('login.err-format')); return; }
                setLoading(true);
                try {
                    const d = await api('login', email);
                    if (d.status === 'SUKSES') {
                        localStorage.setItem('canvla_email', email);
                        localStorage.setItem('canvla_name', d.nama || email);
                        openApp(d.nama || email);
                    } else {
                        showError(d.message || t('login.err-conn'));
                    }
                } catch (e) {
                    showError(t('login.err-conn'));
                }
                setLoading(false);
            });
            emailInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') loginBtn.click(); });

            document.getElementById('logout-btn').addEventListener('click', async () => {
                const email = localStorage.getItem('canvla_email');
                clearInterval(sesInterval);
                if (email) { try { await api('logout', email); } catch (e) {} }
                clearSession();
                location.reload();
            });

            const lynkBtn = document.getElementById('buy-lynk-btn');
            const mayarBtn = document.getElementById('buy-mayar-btn');
            if (LOGIN_CFG.BUY_LYNK_URL.indexOf('YOUR-') === -1) {
                lynkBtn.classList.remove('hidden');
                lynkBtn.addEventListener('click', () => { try { window.open(LOGIN_CFG.BUY_LYNK_URL, '_blank', 'noopener'); } catch (e) {} });
            }
            if (LOGIN_CFG.BUY_MAYAR_URL.indexOf('YOUR-') === -1) {
                mayarBtn.classList.remove('hidden');
                mayarBtn.addEventListener('click', () => { try { window.open(LOGIN_CFG.BUY_MAYAR_URL, '_blank', 'noopener'); } catch (e) {} });
            }

            const savedEmail = localStorage.getItem('canvla_email');
            const savedName = localStorage.getItem('canvla_name');
            if (savedEmail && savedName) {
                setLoading(true);
                api('cek', savedEmail)
                    .then(d => {
                        setLoading(false);
                        if (d.status === 'VALID') openApp(savedName);
                        else { clearSession(); }
                    })
                    .catch(() => { setLoading(false); openApp(savedName); });
            }
        })();

        // === BOOT ===
        buildSidebar();
        buildMobileNav();
        buildPanels();
        CATEGORIES.forEach(initCategory);
        document.querySelectorAll('.lang-btn').forEach(x => x.classList.toggle('selected', x.dataset.lang === LANG));
        applyI18n();
        switchTab('beranda');
    });
    