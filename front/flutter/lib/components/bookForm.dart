import 'package:flutter/material.dart';

class TextForm extends StatefulWidget {
  final String value1;
  final String value2;
  final FormFieldSetter<String>? onSaved; // Adicionado onSaved

  const TextForm({super.key, required this.value1, required this.value2, this.onSaved});

  @override
  BookForm createState() => BookForm();
}

class BookForm extends State<TextForm> {
  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          ' ${widget.value1}',
          style: TextStyle(
            fontSize: 14,
            fontWeight: FontWeight.bold,
          ),
        ),
        SizedBox(height: 2.0),
        Container(
          width: screenWidth * 0.6,
          height: 40,
          margin: EdgeInsets.all(1.0),
          padding: EdgeInsets.all(2.0),
          decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(color: Colors.grey, width: 2.0),
            borderRadius: BorderRadius.circular(10.0),
          ),
          child: TextFormField(
            decoration: InputDecoration(
              border: InputBorder.none,
              contentPadding: EdgeInsets.only(bottom: 10.0,left:4.0),
            ),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return widget.value2;
              }
              return null;
            },
            onSaved: widget.onSaved, // Adiciona a função onSaved
          ),
        ),
      ],
    );
  }
}
