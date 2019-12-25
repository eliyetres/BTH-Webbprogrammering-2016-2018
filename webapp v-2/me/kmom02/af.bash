#!/bin/bash
curl \
    --silent   \
    --header "Accept: application/json" \
    --header "Accept-Language: sv" \
    --header "From: e.hagman@outlook.se" \
    http://api.arbetsformedlingen.se/af/v0/$* \
    | python3 -mjson.tool