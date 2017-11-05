variable "cloudfront_zone_id" {
  // See: http://docs.aws.amazon.com/general/latest/gr/rande.html
  description = "CloudFront has a static, global Zone ID. This is it."
  type = "string"
  default = "Z2FDTNDATAQYW2"
}

resource "aws_route53_record" "dns_web_a_record" {
  zone_id   = "${var.route53_zone}"
  name      = "${var.env}"
  type      = "A"

  alias {
    name    = "${aws_s3_bucket.web_bucket.website_domain}"
    zone_id = "${var.route53_zone}"
    evaluate_target_health = false
  }
}

