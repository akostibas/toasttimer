variable "name" {
  description = "Name of this application"
  type = "string"
  default = "toasttimer"
}

variable "domain_name" {
  description = "Domain name of the website"
  type = "string"
  default = "toasttimer.com"
}

variable "env" {
  description = "Which environment to deploy"
  type = "string"
  default = "dev"
}

variable "route53_zone" {
  description = "AWS Route53 Zone ID, made outside Terraform"
  type = "string"
  default = "Z1FGOCUQ0416EA"
}

provider "aws" {
  region = "us-west-2"
}

provider "aws" {
  alias = "east-1"
  region = "us-east-1"
}
