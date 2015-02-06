use v5.20;
use Data::Printer;

my %sites;
open my $in, "<", "sites.txt";
while (<$in>) {
  chomp;
  $sites{$_} = 1;
}
close $in;

open $in, "<", "input/in.html";
while (<$in>) {
  if (my ($site) = /title="(\w\w\w)/) {
    if ($sites{$site}) {
      say;   # We care about this site, so keep it
    } else {
      # skip this site and 2 more
      <$in>; <$in>;
    }
  }
  say;
}



# http://192.168.52.109/ajaxMaintenanceGridR/ajaxGridR.php

