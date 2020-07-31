<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<?php header("Content-type: text/xml;charset=utf-8"); ?>
<?php 
    $json = file_get_contents('http://api.ragnarokmobile.net/api/sitemap');
    $results = json_decode($json, true); 
?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <?php $url = 'https://ragnarokmobile.net/siteemap/';?>
    <?php foreach($results as $key => $result) : ?>
        <sitemap>
            <loc><?= $url . $key ?>.php</loc>
            <lastmod><?= $result['updated_at'] ?></lastmod>
        </sitemap>
    <?php endforeach ?>
</sitemapindex>