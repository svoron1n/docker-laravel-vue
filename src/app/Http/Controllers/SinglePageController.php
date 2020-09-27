<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SinglePageController extends AbstractController
{
    public function index() {
        return view('app');
    }
}
