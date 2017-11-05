// See https://www.terraform.io/docs/providers/aws/r/s3_bucket.html
resource "aws_s3_bucket" "web_bucket" {
  bucket = "${var.env}.${var.domain_name}"
  acl    = "public-read"
  policy = <<EOF
{
    "Version":"2012-10-17",
    "Statement":[
        {
            "Sid":"AddPerm",
            "Effect":"Allow",
            "Principal": "*",
            "Action":["s3:GetObject"],
            "Resource":["arn:aws:s3:::${var.env}.${var.domain_name}/*"]
        }
    ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}
