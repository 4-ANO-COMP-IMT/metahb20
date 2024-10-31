import 'package:flutter/material.dart';
import 'package:flutter1/pages/registerBookPage.dart';
import 'package:flutter1/pages/library.dart';
void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});
  
  @override
  Widget build(BuildContext context) {
    print("a");
    return MaterialApp(
      title: 'Minha Estante',
      debugShowCheckedModeBanner: false,
      home: RegisterBookPage(),
      routes: {
        '/registerbook': (context) => RegisterBookPage(),
        '/library': (context) => Library(),
      }
    );
  }
}
